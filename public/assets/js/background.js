(function(){
	var bg = {
		
		/* Set up event listeners
		 * @params void
		 * @returns void
		 */
		init:function(){
			this.tabId = 0;
			
			chrome.browserAction.onClicked.addListener(this.buttonHandler.bind(this));
			chrome.runtime.onMessage.addListener(this.messageHandler.bind(this))
		},
		
		/* Get the tab ID that we should be sending messages to
		 * @params function callback to execute after tabs query
		 * @returns void
		 */
		getTab:function(cb){
			var self = this;
			
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				self.tabId = tabs[0].id;
				cb();
			});
		},
		
		/* Handler: When the button is clicked
		 * @params void
		 * @returns void
		 */
		buttonHandler:function(){
			this.getTab(this.sendMessage.bind(this,'button','1'));
		},
		
		/* Handler: When a message is received from inner context
		 * @params 
		 * @returns
		 */
		messageHandler:function(request, sender, sendResponse){
			if (request.data){
				this.ajax(request.data)
			}
		},
		
		/* Instantiate the AJAX obj
		 * @params void
		 * @returns void
		 */
		ajax:function(data){
			console.log('XHR started');
			
			try{
				var xmlhttp = this.xmlhttp = new XMLHttpRequest();
				xmlhttp.open("POST", "http://damp-island-2050.herokuapp.com/post/");
				xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
				xmlhttp.send(JSON.stringify(data));
				xmlhttp.onreadystatechange = this.ajaxHandler.bind(this);
			} catch (e) {
				// statements to handle any exceptions
				this.sendMessage('error','Exception: Server Error');
			}
			
		},
		
		/* Handler: Ajax State change
		 * @params void
		 * @returns void
		 */
		ajaxHandler:function(){
			if (this.xmlhttp.readyState == 4){
				console.log('XHR ended');
				
				if (this.xmlhttp.status = 200){
					this.sendMessage('article',this.xmlhttp.responseText);
				} else if (this.xmlhttp.status = 500){
					this.sendMessage('error','Server Error 500');
				} else if (this.xmlhttp.status = 404){
					this.sendMessage('error','Server Error 404');
				} else if (this.xmlhttp.status = 503){
					this.sendMessage('error','Server Error 503');
				}
			}
		},
		
		/* Send a message to the inner context
		 * @params void
		 * @returns void
		 */
		sendMessage:function(key,value){
			try{
				var message = {};
				message[key] = value;
				chrome.tabs.sendMessage(this.tabId,message);
			} catch (e) {
				// statements to handle any exceptions
				chrome.tabs.sendMessage(this.tabId,{Exception: 'Server Error'});
			}
		}
	}
	
	bg.init();
})()
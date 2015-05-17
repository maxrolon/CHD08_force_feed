(function(w){
	var OuterContext = {
		
		/*
		 * Init stuff
		 * @params void
		 * @returns void
		 */
		init:function(){
			w.FF.ext = this.isExt();
			this.events();
		},
		
		/*
		 * Declare event handlers
		 * @params void
		 * @returns void
		 */
		events:function(){
			if (w.FF.ext){
				chrome.runtime.onMessage.addListener(this.messageHandler.bind(this));
			} else {
				setTimeout(this.messageHandler.bind(this),200);
			}
		},
		
		/* 
		 * Determines is this script has been called
		 * as part of an extension or statically 
		 * for development purposes
		 * @param void
		 * @returns void
		 */
		isExt:function(){
			if (chrome && chrome.runtime.onMessage){
				return true;
			}
			return false;
		},
		
		/* 
		 * Handles all messages from the outer context
		 * @param	mixed the message send from the outer context
		 * @returns void
		 */
		messageHandler:function(request){
			//Just pretending for dev purposes
			if (!request){
				var event = window.FF.visible ? 'ex-hide' : 'ex-show';
				$('body').trigger(event);
				return;
			
			//Extension button click related
			} else if (request.button){
				var event = window.FF.visible ? 'ex-hide' : 'ex-show';
				$('body').trigger(event);
			
			//End of XHR
			} else if (request.article){
				$('body').trigger('article-data-ready',[request.article]);
			}
		}
	};
	
	OuterContext.init();
	
})(window);
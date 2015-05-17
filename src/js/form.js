(function(w){
	var Form = {
		
		/* Just Init
		 * @param void
		 * @returns void
		 */
		init:function(){
			this.data = {};
			this.events();
		},
		
		/* Call any events we need to listen out for
		 * @param boolean is this function getting called post init?
		 * @returns void
		 */
		events:function(isPostLoad){
			if (isPostLoad){
				this.$el = $('#FF_UI form');
				this.$el.on('submit',this.submit.bind(this));
			} else {
				$('body').on('ui-ready',this.events.bind(this,true));
			}
		},
		
		/* Handle the submit of the form
		 * The backbone of the submission process
		 * @param obj event object
		 * @returns void
		 */
		submit:function(e){
			e.preventDefault();
			
			this.handleRanges();
			this.getUrl();
			
			if (w.FF.debug){
				//Bypass the whole XHR thing
				$('body').trigger('article-data-ready');
			} else {
				var message = {};
				message['data'] = w.FF.useMock ? w.FF.mockData : this.data;
				
				$('#FF_UI .loader').show();
				
				console.dir(message);
				
				//Init XHR in other context
				chrome.runtime.sendMessage(message);
			}
			
			return false;
		},
		
		/* Get range values which will determine the template
		 * number to send to endpoint. Changes this.data as 
		 * apposet to returning value
		 * @param void
		 * @returns void
		 */
		handleRanges:function(){
			var values = {};
			
			$r = this.$el.find('[type="range"]');
			$r.each(function(){
				var v = $(this).val();
				v = Math.round(v/1000);
				values[$(this).attr('name')] = v;
			});
			
			var 
				t = values['time'],
				s = values['seriousness'];
			
			if (!t && s){
				this.data['tnum'] = 1;
			} else if (!t && !s){
				this.data['tnum'] = 2;
			} else if (t && !s){
				this.data['tnum'] = 3;
			} else {
				this.data['tnum'] = 4;
			}
			
			window.FF.template = this.data['tnum'];
		},
		
		/* Get the URL of the page
		 * @param void
		 * @returns void
		 */
		getUrl:function(){
			this.data['url'] = window.location.href;
		}
	};
	
	Form.init();
	
})(window);
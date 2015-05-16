(function(w){
	var Form = {
		init:function(){
			this.data = {};
			this.events();
		},
		events:function(d){
			if (d){
				this.$el = $('#FF_UI form');
				this.$el.on('submit',this.submit.bind(this));
			} else {
				$('body').on('ui-ready',this.events.bind(this,'secondary'));
			}
		},
		submit:function(e){
			e.preventDefault();
			
			this.handleRanges();
			this.getUrl();
			
			if (w.FF.debug){
				$('body').trigger('article-data-ready');
			} else {
				chrome.runtime.sendMessage({data:this.data});
			}
			return false;
		},
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
			
			if (t && s){
				this.data['tnum'] = 1;
			} else if (t && !s){
				this.data['tnum'] = 2;
			} else if (!t && !s){
				this.data['tnum'] = 3;
			} else {
				this.data['tnum'] = 4;
			}
		},
		getUrl:function(){
			//this.data['url'] = window.location.href;
			this.data['url'] = "http://www.huffingtonpost.com/2015/05/13/amtrak-crash-speed-limit_n_7276902.html"
		}
	};
	
	Form.init();
	
})(window);
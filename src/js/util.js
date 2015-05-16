(function(w){
	var util = {
		init:function(){
			this.events();
		},
		events:function(){
			$('body')
				.on('ui-ready',this.triggerUtil.bind(this));
		},
		triggerUtil:function(){
			this.rangeslider();
		},
		rangeslider:function(){
			$('[type="range"]').rangeslider({
		    polyfill: false
		  });
		}
	};
	
	util.init();
	
})(window);
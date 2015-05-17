(function(w){
	var ui = {
		
		/*
		 * Init stuff
		 * @params void
		 * @returns void
		 */
		init:function(){
			this.preparePage();
			this.getUITemplate();
			this.events();
		},
		events:function(){
			$('body')
				.on('ex-show',this.show.bind(this))
				.on('ex-hide',this.hide.bind(this));
		},
		preparePage:function(){
			this.$page = $('body').wrapInner('<div class="FF_bodywrap"></div>');		},
		getUITemplate:function(){
			var url;
			
			if (w.FF.ext){
				url = chrome.extension.getURL("templates/ui.html");
			} else {
				url = 'templates/ui.html';
			}
			$.get(url,this.storeTemplate.bind(this));
		},
		storeTemplate:function(d){
			this.$template = $(d);
			this.$template.insertAfter('.FF_bodywrap');
			$('body').trigger('ui-ready');
			this.setAnimations();
			this.templateReady = true;
		},
		setAnimations:function(){
			this.animation = 
			new TimelineMax()
			.pause()
			.to(this.$template, 1,{x:0});
				
		},
		wait:function(){
			this.timer = setInterval(function(){
				if (this.templateReady){
					this.show();
					clearInterval(this.timer);
				}
			}.bind(this), 100);	
		},
		toggle:function(){
			window.FF.visible = window.FF.visible ? false : true;	
		},
		show:function(){
			if (!this.templateReady){
				this.wait();
				return;
			}
			if (this.animation.isActive()) return;
			this.toggle();
			this.animation.play(0);
		},
		hide:function(){
			if (this.animation.isActive()) return;
			this.toggle();
			this.animation.reverse(0);
		}
	};
	
	ui.init();
	
})(window);
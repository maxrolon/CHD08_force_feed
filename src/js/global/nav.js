(function(w,undefined){
	
	var Nav = {
		
		/*
		 * Instantiate Scroll Magic controller
		 * Change the default animaton technique
		 * to animate scroll as appose to jump to position
		 * Declare event handlers
		 *
		 */
		init:function(){
			LH.Scroll = this.controller = new ScrollMagic.Controller();
			this.scenes = [];
			this.controller.scrollTo(this.animation.bind(this));
			
			if (!LH.termsPage){
				this.events();
				this.setWaypoints();
				this.url();
			}
		},
		
		/*
		 * Declare event handlers
		 * @params	void
		 * @returns	void
		 *
		 */
		events:function(){
			$('body')
				.on('click','[data-anchor]',this.click.bind(this));
			
			$(window)
				.resize(this.updateWaypointDurations.bind(this));
		},
		
		/*
		 * -
		 * @params	void
		 * @returns	void
		 *
		 */
		setWaypoints:function(){
			for (i = 1; i <= 5;i++){
				var height = $(".section-"+i).height();
				this.scenes[i] = new ScrollMagic.Scene({triggerElement: ".section-"+i,offset:-100,duration:height, triggerHook: "onLeave"})
				.setClassToggle('[data-display="'+i+'"]', "active")
				.addTo(this.controller);
			}
		},
		
		/*
		 * -
		 * @params	void
		 * @returns	void
		 *
		 */
		updateWaypointDurations:function(){
			for (i in this.scenes){
				this.scenes[i].duration($(".section-"+i).height());
			}
		},
		
		/*
		 * Change the position of the scroll based 
		 * on the URL string
		 * @params	void
		 * @returns	void
		 *
		 */
		url:function(){
			if (Modernizr.touch) return;
			
			var 
				href = document.location.href,
				anchor = href.split('?').length > 0 ? href.split('?')[0] : href,
				id  = anchor.match(/^https?:\/\/(?:.[^\/]*)\/?(.[^\/?#]*)?/)[1] || '';
		
			if (!$('#'+id).length) return;
		
			var scrollTo = this.determineAnchor(id);
			
			setTimeout(this.controller.scrollTo.bind(this,scrollTo),500);
		},
		
		/*
		 * Handle the click event based on the href
		 * of the element
		 * @params	obj	event object
		 * @returns	void
		 *
		 */
		click:function(e){
			e.preventDefault();
			var 
				$el = $(e.currentTarget)
				id = $el.attr('href').substr(1);
				
			if (!id) return;
			if ($el.attr('data-anchor') == 'false') return;
			
			if (id == 'top'){
				TweenLite.to(window, 1, {scrollTo:{y:0}, ease:Power2.easeOut});
				return false;
			}
			
			if (LH.videoPlaying){
				$('body').trigger('stop-video');
				return false;
			}
			
			this.history(id);
			
			var scrollTo = this.determineAnchor(id);
			this.controller.scrollTo(scrollTo);
		},
		
		/*
		 * Assess if the anchor is section 2. If so, since
		 * section two is positioned ab
		 * @params	string	Node ID
		 * @returns	string	anchor node ID
		 *
		 */
		determineAnchor:function(id){
			this.animating = id;
			var 
				$el = $('#'+id);
				isHome = $el.hasClass('section-1'),
				id = $el.hasClass('section-2') ? $('.section-1').attr('id') : id;
			
			var 
				to = $('#'+id).offset().top,
				_class = $('#'+id).attr('class'),
				needsOffset = ((_class.indexOf('3') != -1 || _class.indexOf('4') != -1 || _class.indexOf('5') != -1) && !LH.md);
				
			to = needsOffset ? to - 65 : to;
			to = isHome ? to - 100 : to;
			
			return to;
		},
		
		/*
		 * Scroll animation function
		 * Changes the default animaton technique
		 * @params	void
		 * @returns	void
		 *
		 */
		animation:function(newpos){
			$('html,body').animate({scrollTop: newpos},500,this.complete.bind(this));
		},
		
		/*
		 * Callback function for scroll animation
		 * @params	void
		 * @returns	void
		 *
		 */
		complete:function(){
			var 
				id 	= this.animating,
				$el = $('#'+id);
				
			// If direct el is section 2	
			if ($el.hasClass('section-2')){
				$('body').trigger('section-2');
			}
			
			// If direct el is section 1
			if ($el.hasClass('section-1')){
				if ($('.section-2').hasClass('show')){
					$('body').trigger('section-2');
				}
			}
			
			this.animating = false;
		},
		
		/*
		 * Change window history if API present
		 * @params	void
		 * @returns	void
		 *
		 */
		history:function(id){
			if (w.history && w.history.pushState) {
				history.pushState("", document.title, id);
			}
		}	
	}
	
	Nav.init();
	
})(window);
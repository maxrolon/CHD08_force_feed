(function(w){
	
	var Util = {
		
		/*
		 * Init stuff
		 * @params void
		 * @returns void
		 */
		init:function(){
			this.fixed = false;
			this.throttle = {};
			this.carousel = {};
			this.scrollPos = {};
			this.scrollPos.prev = 0;
			this.scrollPos.down = false;
			
			this.setAnimations();
			this.events();
			
			this.howToCarousel();
			this.longhornLunchCarousel();
			this.votingNumbers();
			
			
		},
		setAnimations:function(){
			this.A_MenuSM = new TimelineMax()
			.to('.mobile-menu',0.6,{autoAlpha:1,css:{right:'0%'}})
			.staggerFrom('.mobile-menu nav a',0.3,{css:{opacity:0,y:'5px'}},0.2,'-=0.3')
			.from('.mobile-menu .social',0.4,{css:{opacity:0,x:'10px'}},'-=0.1')
			.pause();
		
			this.A_fixed_1 = TweenMax
			.from('header[role="main"]',0.3,{css:{y:'-100px'}})
			.pause();
			
			this.A_fixed_2 = TweenMax
			.fromTo(
				'header[role="main"]',0.3,
				{
					css:{y:0}
				},
				{
					css:{y:'-100px'},
					onComplete:function(){
						TweenMax.fromTo('header[role="main"]',0.3,{css:{y:-70}},{css:{y:0}});
						$('header[role="main"]').removeClass('fixed');
					}
				}
			).pause();
		},
		
		/*
		 * Events and stuuuuff
		 * @params void
		 * @returns void
		 */
		events:function(){
			var self = this;
			
			$(window)
				.on('scroll',this.fixedMenu.bind(this))
				.on('scroll',$.throttle(500,this.mobileHeaderMenu.bind(self)))
				.on('resize',this.howToCarousel.bind(this))
				.on('resize',this.longhornLunchCarousel.bind(this));
			
			$('body')
				.on('click','[data-mobile-menu]',this.mobileMenu.bind(this))
				.on('click','.section-2 [class^="arrow-"]',this.arrows.bind(this))
				.on('click','.icon-facebook',this.FacebookShare.bind(this))
				.on('click','.icon-twitter',this.TwitterShare.bind(this));
		},
		
		arrows:function(e){
			var 
				$el = $(e.currentTarget),
				dir = $el.hasClass('arrow-left') ? 'previous' : 'next';
			
			if (this.carousel.a){
				this.carousel.a[dir]();
			}
			return false;
		},
		
		/*
		 * How To section
		 * Triggers and removes Flickity carousel
		 * based on the viewport width
		 * @params	void
		 * @returns void
		 */
		howToCarousel:function(){
			if (LH.termsPage) return;
			
			var width = $(window).width();
			
			if (width <= 768){
				if (this.throttle.a) return;
				this.throttle.a = true;
				
				var $el = $('.section-2 .carousel')[0];
				this.carousel.a = new Flickity($el,{
					contain:true,
					draggable:true,
					pageDots:false,
					wrapAround:false,
					prevNextButtons:false,
				});
			} else {
				if (!this.throttle.a) return;
				this.throttle.a = false;
				this.carousel.a.destroy();
			}
		},
		
		/*
		 * Delicious lunch section
		 * Triggers and removes Flickity carousel
		 * based on the viewport width
		 * @params	void
		 * @returns void
		 */
		longhornLunchCarousel:function(){
			if (LH.termsPage) return;
			
			var width = $(window).width();
			
			if (width <= 965){
				if (this.throttle.b) return;
				this.throttle.b = true;
				
				var $el = $('.section-5 .carousel')[0];
				this.carousel.b = new Flickity($el,{
					contain:true,
					autoPlay:true,
					draggable:true,
					pageDots:true,
					wrapAround:false,
					touchVerticalScroll: false,
					resize:false,
					prevNextButtons:false,
				});
			} else {
				if (!this.carousel.b) return;
				this.throttle.b = false;
				this.carousel.b.destroy();
			}
		},
		
		/*
		 * Super simple mobile menu logic using GSAP
		 * animation declared in setAnimations method
		 * @params	void
		 * @returns void
		 */
		mobileMenu:function(){
			var 
				$menu  = $('.mobile-menu'),
				toggle = $menu.hasClass('active');
				
			if (!toggle){
				this.A_MenuSM.play();
				$menu.addClass('active');
			} else {
				this.A_MenuSM.reverse(0);
				$menu.removeClass('active');
			}
		},
		
		/*
		 * Ended up not doing CSS transition and rather
		 * animating the header via GSAP because the animate
		 * to and from different states has a couple
		 * of differences that would have required intermediary
		 * CSS classes to handle it
		 * Events and stuuuuff
		 * @params	obj	event object
		 * @returns void
		 */
		fixedMenu:function(e){
			var 
				y = $(window).scrollTop(),
				w = $(window).width(),
				$header = $('header[role="main"]');
				
			if (w <= LH.sizeMD){
				$header.removeClass('fixed');
				return;	
			}
			
			$header.removeClass('hide');
			
			//Clear mobile menu resdue styles
			$header[0].style.position = '';
			
			if (y > 120){
				// We call this here so that we don't have to
				//wait for the this.fixed state to change to show
				//the menu if transitioning from mobile state
				$header.addClass('fixed');
				
				if (this.fixed) return;
				this.fixed = true;
				this.A_fixed_2.pause();
				this.A_fixed_1.play(0);
				
			} else {
				if (!this.fixed) return;
				this.fixed = false;
				this.A_fixed_1.pause();
				this.A_fixed_2.play(0);
			//End if
			}
		},
		
		/*
		 * Show the menu only on scroll up for mobile
		 * It was a bit hacky to get it to play nice  
		 * with the fixedMenu method but seems
		 * to be working well
		 * @params	void
		 * @returns void
		 */
		mobileHeaderMenu:function(){
			if ($(window).width() > LH.sizeMD) return;
			
			var 
				prev = this.scrollPos.prev,
				pos = $(window).scrollTop(),
				$el = $('header[role="main"]');
				
			this.scrollPos.prev = pos;
			
			if (pos < 70){
				$el.removeClass('hide');
				return;
			}
			
			if (Math.abs(prev - pos) <= 40){
				return;
			}
			
			if (prev > pos){
				$el.removeClass('hide');
			} else {
				$el.addClass('hide');
			}
		},
		
		/*
		 * On page load, get actual real-time votes
		 * of each lunch via an simple ajax call.
		 * The ajax call just returns all the lunch vote info
		 * and we use jQuery to match name to DOM element
		 * and change amount upon match
		 * @params	void
		 * @returns void
		 */
		votingNumbers:function(){
			var self = this;
			$.get('/app/votecount.php',{},function(d){
				for (prop in d){
					var $count = $('[data-name="'+prop+'"] .vote-count');
					$count.find('span').html(self.formatNumber(d[prop],','));
					$count.removeClass('hidden');
				}
			},'json');
		},
		
		/*
		 * User a regex to format the number when necessary
		 * @params	void
		 * @returns void
		 */
		formatNumber:function(_number,_sep){
			_number = typeof _number != "undefined" && _number > 0 ? _number : "";
			_number = _number.replace(new RegExp("^(\\d{" + (_number.length%3? _number.length%3:0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim();
			if(typeof _sep != "undefined" && _sep != " ") {
				_number = _number.replace(/\s/g, _sep);
			}
			return _number;
		},
		
		/*
		 * Basic implementation of FB sharing with dynamic content
		 * @params	void
		 * @returns void
		 */
		FacebookShare:function(e){
			e.preventDefault();
			
			var 
				type = $(e.currentTarget).attr('data-type'),
				data = {};
			
			switch (type){
				case 'header':
					data['caption'] = "Brown bags can be such a drag.";
					data['description'] = "#UpgradeLunch at LongHorn";
					data['image'] = 'https://longhornlunch.com/assets/img/share/twitter/twitter.jpg';
				break;
				case 'form':
					data['caption'] = "One small step for blowing up a sad lunch, one giant leap for ending them all!";
					data['description'] = "I voted. Now it’s your turn";
					data['image'] = 'https://longhornlunch.com/assets/img/share/twitter/twitter.jpg';
					//data['image'] = $('.form').parents('[class^="lunch-"]').attr('data-facebook');
				break;
				default:
					return false;
				break;
			}
			
			FB.ui({
				method: "feed",
				link: "https://longhornlunch.com",
				caption: data['caption'],
				description: data['description'],
				picture: data['image']
			});
			return false;
		},
		
		/*
		 * Setting up of Twitter query params before opening new window
		 * @params	void
		 * @returns void
		 */
		TwitterShare:function(e){
			e.preventDefault();
			
			var 
				type = $(e.currentTarget).attr('data-type'),
				data = {};
			
			switch (type){
				case 'header':
					data['text'] = "LongHorn Lunch > eating at your desk";
				break;
				case 'form':
					data['text'] = "I voted to end sad lunch. Now it’s your turn.";
				break;
				default:
					return false;
				break;
			}
			
			window.open(encodeURI('http://twitter.com/share?url=http://longhornlunch.com&text='+data['text']+'&hashtags=UpgradeLunch&source=webclient'),'newwindow', 'width=500, height=300');
			return false;
		}
	};
	
	Util.init();
	
})(window);
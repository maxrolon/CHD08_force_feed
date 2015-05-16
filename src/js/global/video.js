 LH.videoPlaying = false;

(function(w,undefined){
	
	var Video = {
		
		/*
		 * There's nothing really odd that we do here
		 * Main things are declaring event handlers
		 * and setting the intro animation which
		 * plays on page load with no futher triggers
		 * @params	void
		 * @returns	void
		 *
		 */
		init:function(){
			this.events();
		},
		
		/*
		 * The video play button trigger and the handler
		 * for the custom event
		 * @params	void
		 * @returns	void
		 *
		 */
		events:function(){
			$('body')
				.on('click','.section-1 [data-trigger="video"]',this.prepare.bind(this,1))
				.on('click','.section-3 [data-trigger="video"]',this.prepare.bind(this,3))
				.on('click','.section-1 .video-close',this.stop.bind(this,1))
				.on('click','.section-3 .video-close',this.stop.bind(this,3))
				.on('animation-complete',this.youtube.bind(this));
		},
		
		/*
		 * We set up the YouTube Iframe using the 
		 * YouTube API. We declare a callback to display
		 * the iframe once it is ready
		 * @params	void
		 * @returns	void
		 *
		 */
		youtube:function(){
			this.$el.find('.loader').addClass('visible');
			
			if (!YT) return;
			
			var id = this.$el.find('.is-selected').attr('data-youtube');
			
			this.$el.find('.video-close').fadeIn();
			this.$el.find('.video-container').prepend('<div id="player">');
			this.player = new YT.Player('player',{
				width:'100%',
				height:'100%',
				videoId:id,
				playerVars:{
					'color':'white',
					'autohide':1,
					'autoplay':1,
					'controls':1,
					'showinfo':0,
					'theme':'light',
					'rel':0,
					'wmode': 'transparent'
				},
				events:{
					'onStateChange':this.videoStateChange.bind(this),
					'onReady':this.playVideo.bind(this)
				}
			});
			//onReady event above does not fire above on IE
			var ie10 = window.navigator.userAgent.indexOf("MSIE");
			var ie11 = window.navigator.userAgent.indexOf("Trident");
			if(ie10 > 0 || ie11  > 0) this.playVideo();
		},
		
		/*
		 * This is the callback for the YouTube API ready
		 * event. Simply set a global property and show the node
		 * @params	void
		 * @returns	void
		 *
		 */
		playVideo:function(){
			this.$el.find('#player').addClass('show');
			this.$el.find('.loader').removeClass('visible');
		},
		
		/*
		 * Called whenever the video state changes. We use
		 * it only when the video ends so we can transition
		 * back to the slideshow automatically
		 * @param	int	number corresponding to the new player state
		 * @returns	void
		 *
		 */
		videoStateChange:function(i){
			if (typeof i.data != 'boolean' && i.data == 0){
				this.$el.find('.video-close').trigger('click');
			}
		},
		 
		/*
		 * The nav modules handles the click events connected
		 * to anchor points, including the video close button, 
		 * which also acts as the section-2 trigger if there
		 * is not a video playing. This function hide the video
		 * and resets states
		 * @params	void
		 * @returns	void
		 *
		 */
		stop:function(section){
			if (!LH.videoPlaying) return true;
			LH.videoPlaying = false;
			
			this.player.stopVideo();
			$('#player').remove();
			$('.video-close').fadeOut();
			
			$('body').trigger('forward-animation',[section]);
		},
		
		/*
		 * Prepare the first section for the video display
		 * by reversing the into animation at a 1:1 time scale
		 * @params	void
		 * @returns	void
		 *
		 */
		prepare:function(section){
			LH.videoPlaying = true;
			this.$el = $('.section-'+section);
			$('body').trigger('reverse-animation',[section]);
		}
	}
	
	Video.init();
	
})(window);
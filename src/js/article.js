(function(w){
	
	var Article = {
		
		/*
		 * Init Stuff
		 * @params void
		 * @returns void
		 */
		init:function(){
			this.slideshowIterator = 0;
			this.imageLoadAmount = 0;
			this.allImagesLoaded = false;
			this.events();
		},
		
		/*
		 * Declare event handlers
		 * @param boolean is this function getting called post init?
		 * @returns void
		 */
		events:function(isPostLoad){
			// Has to wait until the template is loaded
			if (isPostLoad){
				$('#FF_Article')
					.on('click','.exit',this.remove.bind(this));
			} else {
				$('body')
					.on('article-data-ready',this.renderStart.bind(this));
			}
		},
		
		/*
		 * Do the preparation to get the response rendered to
		 * the page! Acknowledge that the XHR request ended.
		 * @param obj event object
		 * @param obj data recieved from the endpoint
		 * @returns void
		 */
		renderStart:function(e,d){
			$('#FF_UI .loader').hide();
			
			// Is there a template on the page already?
			if (this.$active){
				this.$active.remove();
				this.$active = false;
			}
			
			// Use the real response or the mock?
			if (w.FF.useMock){
				this.data = w.FF.mockResponse
			} else {
				this.data = JSON.parse(d);
			}
			
			//Decide which template variant to use
			this.type = t = Number(this.data.template) <= 2 ? 'a' : 'b';
			
			//If we have already fetched the template file..
			if (this['template_'+t]){
				this.cacheTemplate();
				return;
			} 
			
			//Which URL to fetch (Are we in dev mode?)
			if (w.FF.ext){
				url = chrome.extension.getURL("templates/template-"+t+".html");
			} else {
				url = "templates/template-"+t+".html";
			}
			
			//Love a bit of AJAX
			$.get(url,this.cacheTemplate.bind(this));
		},
		
		/*
		 * Do the preparation to get the response rendered to
		 * the page! Acknowledge that the XHR request ended.
		 * @param obj data from XHR response
		 * @returns void
		 */
		cacheTemplate:function(d){
			//Cache a reference to the template HTML (raw)
			if (d && !this['template_'+this.type]){
				this['template_'+this.type] = d || '';
			}
			
			//Get some DOM action
			this.render();
		},
		
		/*
		 * Render the template to the page!
		 * @params	void
		 * @returns	void
		 */
		render:function(){
			//Reset necessary iterators etc
			var imgI = 1;
			this.imageLoadAmount = 0;
			this.allImagesLoaded = false;
			
			var t = this['template_'+this.type];
			
			this.$active = $(t).insertAfter('.FF_bodywrap');
			this.$content = this.$active.find('#FF__body');
		
			console.dir(this.data.content);
		
			for (prop in this.data.content){
				var obj = this.data.content[prop];
				
				//Handle text blocks
				if (obj.type == 'text'){
					var $el = $('<p>');
					this.$content.append($el.html(obj.content));
				
				//Handle images
				} else if (obj.type == 'image'){
					var 
						img = '<img class="FF-image-'+imgI+'" src="'+obj.content+'">',
						div = '<div class="FF-image-'+imgI+'" style="background-image:url('+obj.content+')">',
						$el = $(div);
					
					$(img).on('load',this.imageLoaded.bind(this));
					
					this.$content.append(div);
					
					imgI++;
				}
			}
		
			switch (this.type){
				case 'a':
					this.templateA();
				break;
				case 'b':
					this.templateB();
				break;
			}
			
			this.events(true);
		},
		
		/*
		 * Register how many images have loaded
		 * to the page
		 */
		imageLoaded:function(){
			this.imageLoadAmount++;
			console.dir(this.imageLoadAmount)
		},
		
		/*
		 * TEMPLATE A
		 * Get into specifics on a per template basis
		 * @params	void
		 * @returns	void
		 */
		templateA:function(){},
		
		/*
		 * TEMPLATE B
		 * Get into specifics on a per template basis
		 * @params	void
		 * @returns	void
		 */
		templateB:function(){
			this.$images = this.$content.find('div[class^=FF-image]');
			this.timer();
		},
		
		/*
		 * Iterate over each of the images
		 * Changing the display prop of each
		 */
		slideshow:function(){
			this.$images.eq(this.slideshowIterator).addClass('visible')
			this.slideshowIterator++;
		},
		
		/*
		 * Lovely ol' timer
		 */
		timer: function(){
			setInterval(this.slideshow.bind(this),200)
		},
		
		/*
		 * Remove template from el pago
		 * and hide the extension UI
		 * @params	void
		 * @returns	void
		 */
		remove:function(){
			this.$active.remove();
			$('body').trigger('ex-hide');
		}
	};
	
	Article.init();
	
})(window);
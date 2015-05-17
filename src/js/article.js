(function(w){
	
	var dummy_data = {"template":1,"content":[{"type":"text","content":""},{"type":"image","content":"http://giphy.com/embed/USyGKhTSMhGdW"},{"type":"image","content":"http://giphy.com/embed/USyGKhTSMhGdW"},{"type":"image","content":"http://giphy.com/embed/USyGKhTSMhGdW"},{"type":"image","content":"http://giphy.com/embed/USyGKhTSMhGdW"},{"type":"image","content":"http://giphy.com/embed/USyGKhTSMhGdW"}]};
	
	var Article = {
		init:function(){
			this.events();
		},
		events:function(s){
			if (s == 'secondary'){
				$('#FF_Article')
					.on('click','.exit',this.remove.bind(this));
			} else {
				$('body')
					.on('article-data-ready',this.prepare.bind(this));
			}
		},
		prepare:function(e,d){
			$('#FF_UI .loader').hide();
			
			if (this.$active){
				this.$active.remove();
				this.$active = false;
			}
			
			if (w.FF.debug){
				this.data = dummy_data;
			} else {
				this.data = JSON.parse(d);
			}
			
			this.type = t = Number(this.data.template) <= 2 ? 'a' : 'b';
			
			if (this['template_'+t]){
				this.storeTemplate();
				return;
			} 
			
			if (w.FF.ext){
				url = chrome.extension.getURL("templates/template-"+t+".html");
			} else {
				url = "templates/template-"+t+".html";
			}
			
			$.get(url,this.storeTemplate.bind(this));
		},
		storeTemplate:function(d){
			if (!this['template_'+this.type]){
				this['template_'+this.type] = d || '';
			}
			this.replace();
		},
		replace:function(){
		   var t = this['template_'+this.type];
		   var $t = this.$active = $(t).insertAfter('.FF_bodywrap');
		 
		   var $content = $t.find('#FF__body');
		   
		   for (p in this.data.content){
				var a = this.data.content[p];
				if (a.type == 'text'){
				  var $p = $('<p>');
				  //$content.append($p.html(a.content));
				} else if (a.type == 'image'){
				  var $i = $('<div class="image-gif">').css({
					'backgroundImage':'url('+a.content+')'
				  });
				  $content.append($i);
				}
		   }
		
		   
		   $img = $content.find('.image-gif')
		   
		   var self = this;
		   
		   	setTimeout(function(){
				  var i = 0;
				  self.timer = setInterval(function(){
					   $img.eq(i).show();
					   i++;
					   if (!$img.eq(i)){
						 $img.not(':first-child').hide();  
						 i = 0;
					   }
				   },200);
			},2000) 
		   
		   this.events('secondary');
		},
		remove:function(){
			this.$active.remove();
			$('body').trigger('ex-hide');
		}
	};
	
	Article.init();
	
})(window);
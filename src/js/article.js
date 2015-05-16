(function(w){
	var Article = {
		init:function(){
			this.events();
		},
		events:function(){
			$('body').on('article-data-ready',this.prepare.bind(this));
		},
		prepare:function(e,d){
			console.dir(d);
			this.data = d;
			this.type = t = Number(d.template) <= 2 ? 'a' : 'b';
			
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
		}
	};
	
	Article.init();
	
})(window);
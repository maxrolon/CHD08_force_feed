(function(w){
	var util = {
		init:function(){
			this.events();
		},
		events:function(){
			$('body')
				.on('ui-ready',this.triggerUtil.bind(this))
				.on('#FF__footer .share',this.share.bind(this));
		},
		triggerUtil:function(){
			this.rangeslider();
		},
		rangeslider:function(){
			$('[type="range"]').rangeslider({
		    polyfill: false
		  });
		},
		share:function(){
			console.dir('sharing');
			
			var data = {
				HEADLINE: document.title,
				HTML: $('#FF_Article').html()
			};
			
			$.ajax({
				url : "http://forcefeed.me/save.php",
				type: 'post',
				data: data,
				success : function(data) {
					console.dir(data);
				},
				error: function(data) {
					console.log('Failed');
				}
			});
		}
	};
	
	util.init();
	
})(window);
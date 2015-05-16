$('[data-src]').each(function(){
	var src = $(this).attr('data-src') || ''
	, img = new Image()
	, el = this;
	
	img.onload = function(){
		if (el.tagName == 'DIV' || el.tagName == 'FIGURE' || el.tagName == 'LI'){
			el.style.backgroundImage = 'url('+src+')';
		} else if (el.tagName == 'IMG'){
			if (!! el.parent){
				el.parent.replaceChild(img,el);
			 } else { 
				el.src = src;
			}
		} 
		
		setTimeout(function(){
			$(el).addClass('visible');
		}, 300);
		
	}
	img.src = ''+src;
});
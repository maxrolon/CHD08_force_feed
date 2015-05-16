LH.sizeXS = 600;
LH.sizeMD = 965;

LH.mobile = (function(){
	var touch = Modernizr.touch;
	var small = ($(window).width() <= LH.sizeXS);
	if (touch && small) return true;
	return false;
})();

LH.xs = (function(){
	var small = ($(window).width() <= LH.sizeXS);
	if (small) return true;
	return false;
})();

LH.md = (function(){
	var small = ($(window).width() <= LH.sizeMD);
	if (small) return true;
	return false;
})();

LH.termsPage = (function(){
	var exists = !!$('body.terms').length
	if (exists) return true;
	return false;
})();

$(function(){
	FastClick.attach(document.body);
	
	require('./global/lazy-load');
	require('./global/nav');
	require('./global/util');
	require('./global/video');
});

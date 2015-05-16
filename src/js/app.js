var w = window;

w.FF = {};

w.FF.debug = false;

$(function(){
	require('./util');
	require('./outer-context');
	require('./ui');
	require('./article');
	require('./form');
});

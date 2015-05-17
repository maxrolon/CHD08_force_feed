var w = window;
var FF = w.FF = {};

FF.debug = false;
FF.useMock = false;

FF.mockData = {
	tnum: 1,
	url: "http://www.huffingtonpost.com/2015/05/13/amtrak-crash-speed-limit_n_7276902.html"
}

FF.mockResponse = {"template":1,"content":[{"type":"text","content":"ASSOCIATED PRESS\n            \n        \n        \t\t  \n        An Amtrak train that derailed in Philadelphia on Tuesday night had been going over 100 mph before the crash, the National Transportation Safety Board announced on Wednesday -- more than twice the legal speed limit.Sources familiar with the investigation of the crash told The Wall Street Journal that the train hit a sharp curve and failed to slow down"},{"type":"image","content":"http://media2.giphy.com/media/FOwqXrc38glPO/200.gif"},{"type":"image","content":"https://i.vimeocdn.com/channel/196544_980?mh=250"},{"type":"image","content":"http://media3.giphy.com/media/lNwtH9yTWONW/200.gif"},{"type":"image","content":"https://i.vimeocdn.com/channel/196544_980?mh=250"},{"type":"image","content":"http://www.pbs.org/newshour/wp-content/uploads/2014/06/148123164.jpg"},{"type":"text","content":" Officialsfamiliar with the crash also confirmed this to Reuters on Wednesday"},{"type":"image","content":"http://www.thepca.org/wp-content/uploads/2009/12/January-2011-Newsletter.jpg"},{"type":"image","content":"http://media3.giphy.com/media/d8nTTQ5QxCJvG/200.gif"},{"type":"image","content":"http://media0.giphy.com/media/S0fijaOA7fbfW/200.gif"},{"type":"image","content":"http://media0.giphy.com/media/J4SymBQ8QAFYQ/200.gif"},{"type":"image","content":"http://www.thepca.org/wp-content/uploads/2009/12/January-2011-Newsletter.jpg"},{"type":"text","content":" Speeding has been the cause of several majortrain crashes in recent years"},{"type":"image","content":"http://media1.giphy.com/media/d8nTTQ5QxCJvG/200.gif"},{"type":"image","content":"http://www.gannett-cdn.com/-mm-/0dcd2de70c10c28aab093f5f679e435332de36ec/c=0-107-3578-2128&r=x1683&c=3200x1680/local/-/media/2015/05/12/Wilmington/Wilmington/635670714206452298-APTOPIX-Amtrak-Crash.jpg"},{"type":"image","content":"http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/v2_article_large/public/2013/05/17/metro-north_railroad_collision-may_17_2013.jpg?itok=70igz5no"},{"type":"image","content":"http://media3.giphy.com/media/lNwtH9yTWONW/200.gif"},{"type":"image","content":"http://media3.giphy.com/media/d8nTTQ5QxCJvG/200.gif"}]}

FF.spareImages = [
	"http://media2.giphy.com/media/FOwqXrc38glPO/200.gif",
	"http://media3.giphy.com/media/lNwtH9yTWONW/200.gif",
	"http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/v2_article_large/public/2013/05/17/metro-north_railroad_collision-may_17_2013.jpg?itok=70igz5no",
]


$(function(){
	require('./util');
	require('./outer-context');
	require('./ui');
	require('./article');
	require('./form');
});

(function(){
	var bg = {
		init:function(){
			chrome.browserAction.onClicked.addListener(this.button.bind(this));
			
			chrome.runtime.onMessage.addListener(
			  function(request, sender, sendResponse) {
			    if (request.data){
				    request.data.tnum = 1;
				    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
					xmlhttp.open("POST", "http://maxrolon.com:9000/post/");
					xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
					xmlhttp.send(JSON.stringify(request.data));
					xmlhttp.onreadystatechange = function() {
						if (xmlhttp.readyState == 4) {
							chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
								console.dir(tabs);
								chrome.tabs.sendMessage(tabs[0].id, {article:xmlhttp.responseText});
							});
					    }
					}
				}
			});
		},
		button:function(){
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
			    console.log(response.farewell);
			  });
			});
		}
	}
	bg.init();
})()
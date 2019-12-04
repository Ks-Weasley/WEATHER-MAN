$.getJSON('API LINK',function(data){
	console.log(data);
	
	$("#icon").attr({"src": icon, "alt" : data.weather[0].description});
	$("#temp").html(Math.floor(data.main.temp)+" ");
	$("#weath").text(data.weather[0].description);

})

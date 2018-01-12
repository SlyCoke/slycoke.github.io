function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



 $(document).ready(function(){
var range = ["c7:d7"];
var url;
  url="https://sheets.googleapis.com/v4/spreadsheets/1luIhiPwC4HcwiB3llZyRWAqR3wC71DhO3n8NcEnKWqI/values:batchGet?ranges=c7:d7&key=AIzaSyBXrr9mn-P9sWv5J9BY7Iw7m447wJ4kSeA";
$.ajax({
     async: false,
     type: 'GET',
     url: url,
     success: function(data) {
    var entry = data.valueRanges;
    
    var e1 =  data.valueRanges[0].values;
    for(var j=0;j<3;j++)if (e1[0][j]!=null) $("h2").append(e1[0][j]);
      $("h2").append("<br>");
    }
   });
      //=================================================================
 
 var ajax_call = function() {
  //your jQuery ajax code
  
  $.ajax({
	 dataType:'json',
	 headers:{'Client-ID': wdb3pzybi3py3l1ctwwfc1z4x08py8},
     url: https://api.twitch.tv/kraken/streams/coolestrs,
     success: function(data) {
		 if (data.stream!=null){
			 $(".users").append("a");
		 }else{
			 $(".users").append("n");
		 }
    
  }});
};

var interval = 1000 * 60 * 2; // where X is your every X minutes

setInterval(ajax_call, interval);
 

    });

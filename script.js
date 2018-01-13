function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function jQuery000000000000000_0000000000 (obj){
	
	console.log(obj[0].clan)
}


 $(document).ready(function(){
	
	$.ajax({
     async: false,
     type: 'GET',
	 dataType:'jsonp',
     url: "https://services.runescape.com/m=website-data/playerDetails.ws?names=%5B%22Cools%22%5D&callback=jQuery000000000000000_0000000000&_=0",
     success: function(data) {
    console.log("woot");
    }
   });
	
	
	
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
	 var j=0;
    for(;j<3;j++)if (e1[0][j]!=null) $("h2").append(e1[0][j]);
      $("h2").append("<br>");
    }
   });
      //=================================================================
 	
	//var interval = 1000 * 60 * 0.5; // where X is your every X minutes
	//	setInterval(ajax_call, interval);
	getTwitchUsers();

	


// Get a reference to the database service

 

});



	
	
function getTwitchUsers(){
	
	
	  // Initialize Firebase
	  // TODO: Replace with your project's customized code snippet
	  var config = {
		apiKey: "AIzaSyDXolo2R-hA1QU6w1FAZ7NesS24MtGShKE",
		authDomain: "vitalis-c4726.firebaseapp.com",
		databaseURL: "https://vitalis-c4726.firebaseio.com/",
		storageBucket: "vitalis-c4726.appspot.com",
	  };
	  firebase.initializeApp(config);
	  
	  var myFirebase = firebase.database().ref();
	  var events = myFirebase.child("events");
	  var twitch_streamers = myFirebase.child("twitch_streamers");
	  /*twitch_streamers.push({
		  "rsn":"Coolest",
		  "username": "coolestrs"
	  });
	  twitch_streamers.push({
		  "rsn":"Glacier",
		  "username": "tiddyrs"
	  });*/
	  //var events = myFirebase.child("events");
	 /* events.push({
		"title":"LSK AOD Mass",
		"date":"0",
		"description":"Hosted by Coolest. If you want to minion lure contact Coolest in-game or in discord.",
		"thumbnail":"aod.png"
	  });	 // $(".banner-gallery").append("<div class='gallery-resp'><div class='gallery'><a target='_blank' href='img_fjords.jpg'><img src='aod.png' alt='Trolltunga Norway' width='300' height='200'></a><div class='desc'>"++"</div></div></div>");
	  /*
		var events = myFirebase.child("events");
	  events.limitToLast(1).on('child_added', function(childSnapshot) {
	  
	   events = childSnapshot.val();

	  // Update the HTML to display the recommendation text
	  $("#title").html(events.title)


	});
*/
	events.limitToLast(1).on('child_added', function(childSnapshot) {
		var i=0;
	   var windowWidth = $(window).width();
	
	if(windowWidth < 1400){
		i=1;
	}
	if(windowWidth < 1400){
		i=2;
	}
	   events = childSnapshot.val();
var z = $(".banner-gallery");
	  for(var i=0;i<4;i++){
		  z.append(
		  "<div class='gallery-resp'><div class='gallery' id='"+i+"'><a target='_blank' href='img_fjords.jpg'><img src="+
		  events.thumbnail+" alt='Trolltunga Norway' width='300' height='200'></a><div class='desc'>"+
		  events.title+"</div></div></div>");
	  }
	});
	  /*
	  recommendations.limitToLast(1).on('child_added', function(childSnapshot) {
	  
	   recommendation = childSnapshot.val();

	  // Update the HTML to display the recommendation text
	  $("#title").html(recommendation.title)
	  $("#presenter").html(recommendation.presenter)
	  $("#link").html(recommendation.link)

	  // Make the link actually work and direct to the URL provided
	  $("#link").attr("href", recommendation.link)
	});
	*/
	 // recommendations.push({
	   // "title": "The danger of a single story",
	   // "presenter": "Chimamanda Ngozi Adichie",
	   // "link": "https://www.ted.com/talks/chimamanda_adichie_the_danger_of_a_single_story"
	//});
	
	twitch_streamers.once('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			twitch_streamers = childSnapshot.val();
			getFromTwitch(twitch_streamers.rsn, twitch_streamers.username);
		});
	});
	
};

	
function getFromTwitch(rsn, username){
  //your jQuery ajax code
  $.ajax({
	 dataType:'json',
	 headers:{'Client-ID': 'wdb3pzybi3py3l1ctwwfc1z4x08py8'},
     url: 'https://api.twitch.tv/kraken/streams/'+username,
     success: function(data2) {
		 
		//if(data2.stream!=null) $(".twitch").prepend("<img src=" + data2.stream.channel.logo + " width='40' height='40'>" + "<a href=" + data2.stream.channel.url + ">online</a>");
		if(data2.stream!=null) $(".twitch-streamers-list").append("<div class='twitch-streamer-single'><div class='twitch-streamer-logo' style='background-image:url(" + data2.stream.channel.logo + "); background-size:cover;'></div><p class='twitch-streamer-rsn'>"+rsn+"->Online</p></div>");
		else $(".twitch-streamers-list").append("<div class='twitch-streamer-single'><div class='twitch-streamer-logo'></div><p class='twitch-streamer-rsn'>"+rsn+"->offline</p></div>");
		 
    
  },error:function(){console.log("The requriest failed");}
  });
};

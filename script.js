var database_sheet_id = "130UTRV2z3VZsKSEBC0VXWHuliW_3n56LDa8vKP7GpOk";
var google_sheet_key = "AIzaSyBXrr9mn-P9sWv5J9BY7Iw7m447wJ4kSeA";

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


 $(document).ready(function(){
 	
	//var interval = 1000 * 60 * 0.5; // where X is your every X minutes
	//	setInterval(ajax_call, interval);
	getTwitchUsersSheets();
getEvents();
getBossKC();

// Get a reference to the database service

// getSpeedKillTimes();

});

function getSpeedKillTimes(){
	var margin = 0;
	
	var araxxorSolo=2;
	var araxxorDuo = 3;
	var bm = 11;
	var giantMoleNM=2;
	var giantMoleHM =2;
	
	var graardorNM =2;
	var graardorHM =2;
	var krilNM =2;
	var krilHM =2;
	var kreearaNM =2;
	var kreearaHM =2;
	var zilyanaNM =2;
	var zilyanaHM =2;
	
	var gregNM =2;
	var gregHM  =2;
	var helwyrNM =2;
	var helwyrHM  =2;
	var twinsNM =2;
	var twinsHM  =2;
	var vindictaNM =2;
	var vindictaHM  =2;
	
	var haraken =2;
	
	var kkSolo =2;
	var kkDuo =3;
	var kkTrio  =4;
	
	var legionesSolo =2;
	
	var magister =2;
	
	var nexSolo =2;
	var nexDuo =3;
	
	var aod7man =8;
	
	var qbd =2;
	
	var rotsSolo  =2;
	var rotsDuo  =3;
	var rotsTrio  =4;
	var rots4man =5;
	
	var telos100 =2;
	var telos200 =2;
	var telos300 =2;
	
	var tztokjad =2;
	
	var voragoNMDuo =4;
	var voragoNMTrio =5;
	
	var voragoHM4man =6;
	var voragoHM5man  =7;
	var voragoHM6man =8;
	
	var yakamaru  =11;
	
	var total = araxxorSolo+araxxorDuo+bm+giantMoleNM*2+graardorNM*8+gregNM*8
				+haraken+kkSolo+kkDuo+kkTrio+legionesSolo+magister+nexSolo
				+nexDuo+aod7man+qbd+rotsSolo+rotsDuo+rotsTrio+rots4man+telos100
				+telos200+telos300+tztokjad+voragoNMDuo+voragoNMTrio
				+voragoHM4man+voragoHM5man+voragoHM6man+yakamaru;
	var bossLengthArray = [
		araxxorSolo, araxxorDuo, bm, giantMoleNM, giantMoleHM, 
		graardorNM, graardorNM,graardorNM,graardorNM,graardorNM,graardorNM,graardorNM,graardorNM,
		gregNM, gregNM,gregNM,gregNM,gregNM,gregNM,gregNM,gregNM,
		haraken,kkSolo,kkDuo,kkTrio,legionesSolo,magister,
		nexSolo,nexDuo,aod7man,qbd,rotsSolo,rotsDuo,rotsTrio,rots4man,
		telos100,telos200,telos300,tztokjad,voragoNMDuo,voragoNMTrio,
		voragoHM4man,voragoHM5man,voragoHM6man,yakamaru
	];
	var bossCategoryArray=[
		".araxxi",".araxxi",".beastmaster_durzag",".giant_mole",".giant_mole",
		".gwd1", ".gwd1",".gwd1",".gwd1",".gwd1",".gwd1",".gwd1",".gwd1",
		".gwd2", ".gwd2", ".gwd2", ".gwd2", ".gwd2", ".gwd2", ".gwd2", ".gwd2", 
		".har-aken",".kalphite_king",".kalphite_king",".kalphite_king",".legiones",".magister",
		".nex","#nex",".angel_of_death",".queen_black_dragon",".rots",".rots",".rots",".rots",
		".telos",".telos",".telos",".tzok-jad",".vorago",".vorago",".vorago",".vorago",".vorago",".yakamaru"
	];
	
	var numRecords = 45;
	
	var sheet_name = "speed_kill";
	
	var numNamesEach=3;
	var heightOfOne = 1+numNamesEach;
	
var speed_kill_range = sheet_name+"!a2:ep"+(heightOfOne+1);
var sheet_url =
	"https://sheets.googleapis.com/v4/spreadsheets/"
	+database_sheet_id
	+"/values:batchGet?ranges="
	+speed_kill_range
	+"&key="+google_sheet_key;
	
	var divEncase = "<div class='small-panel-content-speed-kill'>";
	$.ajax({
		async: false,
		type: 'GET',
		url: sheet_url,
		success: function(data) {
	
	var records = data.valueRanges[0];
	console.log(records);
	
	var numDoneColumns = 0
	for (var i=0;i<bossLengthArray.length;i++){
		var tableAll='';
		tableAll+=divEncase;
		tableAll+="<table>";
		//if 0 ->margin
		//if c is 1 and r is 1, title
		//if 1->rank number
		//if 2->name
		//if 3->kc
		
		//title
		tableAll+="<tr class='table-title'>";
		tableAll+="<td  colspan="+ bossLengthArray[i]+" >";
		tableAll+=records.values[0][numDoneColumns];
		tableAll+="</td>";
		tableAll+="</tr>";
		for (var row=0;row<numNamesEach;row++){
			tableAll+="<tr class='speed-kill-record'>";
			for (var col=0;col<bossLengthArray[i];col++){
				//rank row				
					tableAll+="<td class='speed-kill-col'>"+records.values[row+1][numDoneColumns+col]+"</td>";				
			}
			tableAll+="</tr>";
		}
		numDoneColumns+=bossLengthArray[i];
			
		tableAll+="</table>";
		tableAll+="</div>";
	$(bossCategoryArray[i]).append(tableAll);
	}
	
	
},error: function (request, status, error) {
        alert(request.responseText);
    }
   });
	
}


function getTwitchUsersSheets(){
	
	
var sheet_name = "twitch_users";
var MAX_NUM_USERS = 50;
var twitch_users_range = sheet_name+"!a2:b"+(2+MAX_NUM_USERS);
var NUM_USERS_LOC = "c2";
var size_range = sheet_name+"!"+NUM_USERS_LOC;
var twitch_users_sheet_url =
	"https://sheets.googleapis.com/v4/spreadsheets/"
	+database_sheet_id
	+"/values:batchGet?ranges="
	+twitch_users_range +"&ranges="
	+size_range
	+"&key="+google_sheet_key;

	$.ajax({
		async: false,
		type: 'GET',
		url: twitch_users_sheet_url,
		success: function(data) {
			var users = data.valueRanges[0];
			var numUsers = data.valueRanges[1].values[0];

			for(var j=0;j<numUsers;j++)
				getFromTwitch(users.values[j][0],users.values[j][1]);
		},error: function (request, status, error) {
        alert(request.responseText);
    }
   });
}

function getBossKC(){
	var sheet_name = "boss_kc";
	var margin = 1;
	var numNamesEach=3;
	var sizeOfOne = 1+numNamesEach;
	
	var numBossVertical =8;
	var numBossHorizontal =5;
	var sheet_height=(numBossVertical*(sizeOfOne+margin));
var boss_kc_range = sheet_name+"!a2:v"+(1+sheet_height);
var twitch_users_sheet_url =
	"https://sheets.googleapis.com/v4/spreadsheets/"
	+database_sheet_id
	+"/values:batchGet?ranges="
	+boss_kc_range
	+"&key="+google_sheet_key;
	
	var divEncase = "<div class='small-panel-content'>";
	$.ajax({
		async: false,
		type: 'GET',
		url: twitch_users_sheet_url,
		success: function(data) {
			var records = data.valueRanges[0];
console.log(records)

			var table = "";
			
			for (var r=0;r<sheet_height;r+=(sizeOfOne+margin)){
					
				//if remainder of r is 0 ->margin
				//if 1->title
				//if 2->#1
				//if 3->#2
				//if 40->#3
					
					for (var c=0;c<20;c+=(3+margin)){
						table+=divEncase;
						table+="<table>";
						//if 0 ->margin
						//if c is 1 and r is 1, title
						//if 1->rank number
						//if 2->name
						//if 3->kc
						
						//title
						table+="<tr class='table-title'>";
						table+="<td colspan='3' >";
						table+=records.values[r+1][c+1];
						table+="</td>";
						table+="</tr>";
						//rank 1
						table+="<tr>";
						table+="<td>"+records.values[r+2][c+1]+"</td>";
								table+="<td>"+records.values[r+2][c+2]+"</td>";
									table+="<td>"+records.values[r+2][c+3]+"</td>";
						table+="</tr>";
						//rank 2
						table+="<tr>";
						table+="<td>"+records.values[r+3][c+1]+"</td>";
								table+="<td>"+records.values[r+3][c+2]+"</td>";
									table+="<td>"+records.values[r+3][c+3]+"</td>";
						table+="</tr>";
						//rank 3
						table+="<tr>";
						table+="<td>"+records.values[r+4][c+1]+"</td>";
								table+="<td>"+records.values[r+4][c+2]+"</td>";
									table+="<td>"+records.values[r+4][c+3]+"</td>";
						table+="</tr>";
							
						table+="</table>";
						table+="</div>";
						
						
					}
					
					
				
			}
			
			
			$("#boss_kc_case").append(table);
			//if (numEvents>4) numEvents= 4;

			//for(var j=0;j<numEvents;j++){
				
					
			//	if (new Date(events.values[j][6]+" 23:59:59")>=new Date())				
				//addToSite(events.values[j][0],events.values[j][1],events.values[j][2], events.values[j][3], events.values[j][4],events.values[j][5],events.values[j][6]);
			//}
		},error: function (request, status, error) {
        alert(request.responseText);
    }
   });
	
}



function openSpeedKillTab(evt, tab_name) {
    var i, tabcontent, tablinks;
	
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab_name).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it


function getFromTwitch(rsn, username){
  //your jQuery ajax code
  $.ajax({
	 dataType:'json',
	 headers:{'Client-ID': 'wdb3pzybi3py3l1ctwwfc1z4x08py8'},
     url: 'https://api.twitch.tv/kraken/streams/'+username,
     success: function(data2) {
		 
		//if(data2.stream!=null) $(".twitch").prepend("<img src=" + data2.stream.channel.logo + " width='40' height='40'>" + "<a href=" + data2.stream.channel.url + ">online</a>");
		if(data2.stream!=null){
			//$(".online-users").append("<div class='twitch-streamer-row'><div class='twitch-streamer-single'><div class='twitch-streamer-logo' style='background-image:url(" + data2.stream.channel.logo + "); background-size:cover;'></div><p class='twitch-streamer-rsn'>"+rsn+"</p></div></div>");
			if ($(".online-users").html() == 'ONLINE:') 
				$(".online-users").append("<div class='twitch-streamer-row'><div class='twitch-streamer-single'><div class='twitch-streamer-logo' style='background-image:url(" + data2.stream.channel.logo + "); background-size:cover;'></div><p class='twitch-streamer-rsn'>"+rsn+"</p></div></div>");
			else
				$(".online-users").append("<div class='twitch-streamer-row'><div class='twitch-streamer-single'>, <div class='twitch-streamer-logo' style='background-image:url(" + data2.stream.channel.logo + "); background-size:cover;'></div><p class='twitch-streamer-rsn'>"+rsn+"</p></div></div>");
		
		
		}else {
			if ($(".offline-users").html() == 'OFFLINE:') 
				$(".offline-users").append("<div class='twitch-streamer-row .offline'><div class='twitch-streamer-single'><p class='twitch-streamer-rsn .offline' style='color:#737b8c;'>"+rsn+"</p></div></div>");
			else
				$(".offline-users").append("<div class='twitch-streamer-row .offline'><div class='twitch-streamer-single'><p class='twitch-streamer-rsn .offline' style='color:#737b8c;'>, "+rsn+"</p></div></div>");
		}
  },error:function(){console.log("The requriest failed");}
  });
};	
	
	
function addToSite(type, title, date, time, description, thumbnail, duration){

	var events_showcase = $(".banner-gallery");
	var event = "<div class='gallery-resp'><div class='gallery'><img src="+
				thumbnail+" alt="+title+" width='300' height='200'><div class='desc'>"+title;
	if (type=="gathering"){
		event += " @ "+date+" "+time;
	}else if (type=="competition"){
		event+= " ending @ "+duration;
	}
	event+="</div></div></div>";
	events_showcase.append(event);
	  
}

function addToSiteEvents(type, title, date, time, description, thumbnail, duration){

	var events_showcase = $(".banner-gallery-all");
	var event = "<div class='gallery-resp'><div class='gallery'><img src="+
				thumbnail+" alt="+title+" width='300' height='200'><div class='desc'>"+title;
	if (type=="gathering"){
		event += " @ "+date+" "+time;
	}else if (type=="competition"){
		event+= " ending @ "+duration;
	}
	event+="</div></div></div>";
	events_showcase.append(event);
	  
}
function getEvents(){
	
		
var sheet_name = "events";
var MAX_NUM_EVENTS = 50;
var events_range = sheet_name+"!a2:g"+(2+MAX_NUM_EVENTS);
var NUM_EVENTS_LOC = "h1";
var size_range = sheet_name+"!"+NUM_EVENTS_LOC;
var twitch_users_sheet_url =
	"https://sheets.googleapis.com/v4/spreadsheets/"
	+database_sheet_id
	+"/values:batchGet?ranges="
	+events_range +"&ranges="
	+size_range
	+"&key="+google_sheet_key;

	$.ajax({
		async: false,
		type: 'GET',
		url: twitch_users_sheet_url,
		success: function(data) {
			var events = data.valueRanges[0];
			//if (events.values == null) break;
			var numEvents = data.valueRanges[1].values[0];
console.log(events)
			var displayed = 0;

			for(var j=0;j<numEvents;j++){
				
				if(displayed<4){
					if (new Date(events.values[j][6]+" 23:59:59")>=new Date())		{		
					addToSite(events.values[j][0],events.values[j][1],events.values[j][2], events.values[j][3], events.values[j][4],events.values[j][5],events.values[j][6]);
					displayed++;
					}
				
				}
				addToSiteEvents(events.values[j][0],events.values[j][1],events.values[j][2], events.values[j][3], events.values[j][4],events.values[j][5],events.values[j][6]);
			}
		},error: function (request, status, error) {
        alert(request.responseText);
    }
   });
	
	
	
};

	

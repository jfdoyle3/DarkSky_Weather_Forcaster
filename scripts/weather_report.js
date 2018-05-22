// script page
 // request: https://fcc-weather-api.glitch.me/ // reqsicon:
// weather[0].icon:
 // request: https://fcc-weather-api.glitch.me/api/current?lat=41.87092932&lon=-71.42788283
 // request: https://fcc-weather-api.glitch.me/api/current?lat=41.87&lon=-71.43
 // weather[0].icon:
 //https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F01d.png?1499366022009
 //{"coord":{"lon":-71.43,"lat":41.87}
 // Date
	function weekDay(date){
	 var week = [
     "Sun", "Mon","Tues","Wed","Thurs","Fri","Sat"];
    var wDay = date.getDay();
    return week[wDay]
    }
  document.getElementById("weekDay").innerHTML =weekDay(new Date());

function formatDate(date) {
    var mName = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December" ];
     var week = [
     "Sun", "Mon","Tues","Wed","Thurs","Fri","Sat"];
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var wDay = date.getDay();
    var cMonth =  mName[month] + " " + day;
    return cMonth
  }

  document.getElementById("date").innerHTML =formatDate(new Date());

  //  Time
function time() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  var cTime= h + ":" + m; 
//  if (h == 0)
    document.getElementById("time").innerHTML =  cTime;
  var t = setTimeout(time, 500);
}
function checkTime(i) {
 if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
document.getElementById("time").innerHTML = time();

////forcast

function forcast(){
var lat =41.87;
var lon =-71.43; 
var forcast = 'https://fcc-weather-api.glitch.me/api/current?lon=' + lon +'&lat='+lat;

$.getJSON(forcast, getForcast);
$("#temp").html('Tempture is' + forcast.main.temp);

return forcast
}	
document.getElementById("temp").innerHTML=forcast();
//
 //   $("#icon").attr("src",data.weather[0].icon);
 //   var currentTempInCelsius = Math.round(data.main.temp * 10) / 10;
 //        $("#temp").text(currentTempInCelsius);
 //        $("#city").text(data.name);
 //        $("#country").text(data.sys.country);
 //        $("desc").text(data.weather[0].main);
 //        $("tempUnit").text(" " + String.fromCharCode(176)+tempUnit);
 //        
 //        document.getElementById("forcast").innerHTML = getWeatherInfo();
 //  }
 //  
 //}
 
//function showPosition(position) {
//var api = “https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + “&lon=” + position.coords.longitude; $.getJSON(api, function(data){
// Getting Weather Details
//$("#forcast").html(data.name + ", " + data.sys.country);
//}} 
 
 
 //var lat =41.87;
// var lon =-71.43; 
//var weatherSite = “https://fcc-weather-api.glitch.me/api/current?lon=”+lon +"&lat="+lat;

//$.getJSON(weatherSite).done(function(data){
//$("#Temp").html(“Tempture is” + data.main.temp);




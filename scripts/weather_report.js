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
    document.getElementById("time").innerHTML =  cTime;
  var t = setTimeout(time, 500);
}
function checkTime(i) {
 if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
document.getElementById("time").innerHTML = time();

//forcast

//function forcast(){
// var lat =  41.87092932;
 //var lon = -71.42788283; 
 //var weathertAPI = 'https://fcc-weather-api.glitch.me/api/current?lon=' + lon +'&lat='+lat;
 
// $.getJSON(weatherAPI, functon(data){
// $("#temp").append("temp:" + data.main.temp);
// }
//}
//document.getElementById("temp").innerHTML=forcast();

//if (navigator.geolocation) {				
// navigator.geolocation.getCurrentPosition(showPosition);
//} else {
// alert('Geolocation is not supported in your browser');
//}
//
//function showPosition(position) {
//  var api = "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
//
//  $.getJSON(api, function(data){
//    // Getting Weather Details
//    $("#place").html(data.name + ", " + data.sys.country);
//    $("#windSpeed").html(data.wind.speed + "km/h");
//    $("#humidity").html(data.main.humidity + "%");
//    $("#celsius").html(data.main.temp.toFixed(1) + "°C");
//    $("#temp").html(data.main.temp.toFixed(1));
//    $("#description").html(data.weather[0].description);
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
// 
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



//var x = document.getElementById("demo");
//function getLocation() {
//  if (navigator.geolocation) {
//    navigator.geolocation.getCurrentPosition(showPosition);
//  } else {
//    x.innerHTML = "Geolocation is not supported by this browser.";
//  }
//}
//function showPosition(position) {
//  x.innerHTML = "Latitude: " + position.coords.latitude + 
// "<br>Longitude: " + position.coords.longitude; 
//}
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
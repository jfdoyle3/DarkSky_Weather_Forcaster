// script page


 // request: https://fcc-weather-api.glitch.me/api/current?lat=41.87092932&lon=-71.42788283
 // request: https://fcc-weather-api.glitch.me/api/current?lat=41.87&lon=-71.43
 // weather[0].icon:
 //https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F01d.png?1499366022009
 //{"coord":{"lon":-71.43,"lat":41.87}
 // Date
$(function() {
function formatDate(date) {
    var mName = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    return mName[month] + " " + day + ', ' + year;
  }

  document.getElementById("date").innerHTML =formatDate(new Date());

  //  Time
function time() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
 m = checkTime(m);
    document.getElementById("time").innerHTML =  h + ":" + m;
  var t = setTimeout(time, 500);
}
function checkTime(i) {
 if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
document.getElementById("time").innerHTML = time();

////forcast
//
function getWeaterInfo(lat,lon){ 
  //When you have actual lat and lon data
  var lat=41.87;
  var lon=-71.43;
//  var urlString = +lat+"&"+lon;
  var urlString ="https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon;
  console.log(urlString);
   // AJAX JSON DATA
  $.ajax({
   type:"GET",
   url:urlString,
   success:function(data){
    $("#icon").attr("src",data.weather[0].icon);
    var currentTempInCelsius = Math.round(data.main.temp * 10) / 10;
         $("#temp").text(currentTempInCelsius);
         $("#city").text(data.name);
         $("#country").text(data.sys.country);
         $("desc").text(data.weather[0].main);
         $("tempUnit").text(" " + String.fromCharCode(176)+tempUnit);
         
         document.getElementById("forcast").innerHTML = getWeatherInfo();
   }
   
 }
 });
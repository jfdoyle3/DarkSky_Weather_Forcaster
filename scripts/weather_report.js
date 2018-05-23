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
 time();


// Location
var api="https://fcc-weather-api.glitch.me/api/current?lat=41.87&lon=-71.43";
$.getJSON(api,function(data){
  console.log(data);
 var f=(data.main.temp * 1.8) + 32
  icon=data.weather[0].icon;
  $("#city").html(data.name);
  $("#temp").html(parseInt(f)+"&#176");
// document.write("<img src=\""+icon+"\"></img>");
  $("weather").html("<img src=\""+icon+"\"></img>");

});
 
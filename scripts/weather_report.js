// script page

var lat;
var lon;

  // Location
if(navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function(positon){
     lon= positon.coords.longitude;
     lat= positon.coords.latitude;
    var api="https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon;
    $.getJSON(api,function(data){
      const f=(data.main.temp * 1.8) + 32;
      icon=data.weather[0].icon;
      var img="<img src="+icon+">";
      $("#city").html(data.name);
      $("#img").html(img);
      $("#cond").html(data.weather[0].main);
      $("#temp").html(parseInt(f)+"&#176");
      $("#toggle").attr("value", "F");
      $("#toggle").on("click",function(){
          if(document.getElementById("toggle").value == "F"){
            $("#temp").html(parseInt(data.main.temp)+"&#176");  
            $("#toggle").attr("value","C");
          } else {
          if(document.getElementById("toggle").value == "C"){
            $("#temp").html(parseInt(f)+"&#176");  
            $("#toggle").attr("value","F");
          }
        } 
      });
    });
  });  
} 
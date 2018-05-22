// script page
// Get location

 // request: https://fcc-weather-api.glitch.me/api/current?lat=41.87092932&lon=-71.42788283
 // request: https://fcc-weather-api.glitch.me/api/current?lat=41.87&lon=-71.43
 // weather[0].icon:
 //https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F01d.png?1499366022009
 //{"coord":{"lon":-71.43,"lat":41.87}
 // Date///
 $(function() {
function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + '-' + monthNames[monthIndex] + '-' + year;
  }

  document.getElementById("date").innerHTML =formatDate(new Date());
});
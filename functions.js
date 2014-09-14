var sky = -1;
var area = 1;
function myFunction(state, city) { 
   // alert(here)
    // document.getElementById("demo").innerHTML = "Hello JavaScript!";
   
    var stat = state.toUpperCase();
    var str_url = "http://api.wunderground.com/api/85fc2e315428bbd0/hourly/q/" + stat + "/" + city + ".json";
    jQuery(document).ready(function($) {
      $.ajax({
      url : str_url,
      dataType : "jsonp",
      success : function(parsed_json) {
      var sky = parsed_json['hourly_forecast'][0]['sky']
      // alert(sky)
      } 
    });
  });
}

function city_find(zip, area){
window.area = area; 

var xmlhttp = new XMLHttpRequest();
var url = "http://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&sensor=true";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction123(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction123(response) {
    var arr = JSON.parse(response);
    var city = arr.results[0].address_components[1].long_name
    var state = arr.results[0].address_components[3].short_name
    var city1 = city.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    var city_new = city1.replace(/\s+/g, '_');
    // alert(city_new)

    var stat = state.toUpperCase();
    var str_url = "http://api.wunderground.com/api/85fc2e315428bbd0/hourly/q/" + stat + "/" + city_new + ".json";
    jQuery(document).ready(function($) {
      $.ajax({
      url : str_url,
      dataType : "jsonp",
      success : function(parsed_json) {
      var sky = parsed_json['hourly_forecast'][0]['sky']
      // alert(sky)
      var sky1 = parseInt(sky)
      // var sunAngle = 90


      var currentTime = new Date();
      var sunAngle;
      var currentHour = currentTime.getHours();
    
      if(currentHour >= 6 || currentHour <= 12){
        sunAngle = (currentHour-6)*15;
      }else{
        sunAngle = 0;
      }
      sunAngle += ((currentTime.getMinutes())/60)*15;
      //alert("sunAngle " + sunAngle)


      //alert("sin "+ Math.sin(sunAngle))
      var Rnot = 990.0 * Math.sin(sunAngle * (Math.PI/180)) - 30;
    //alert("hello yo yo mah " + Rnot);
      var convertUnits = .01;

      var cloudCoverMultiple = ( 1.0 - ( .75 * ( Math.pow( sky1 * convertUnits , 3.4) )));
    
      
    
      var instant = Rnot * cloudCoverMultiple;
    
      var instantPostUnitCovenrsion = instant * convertUnits;
      alert(instantPostUnitCovenrsion)
    // return instantPostUnitConversion;
      


      var stateMap = new Object();
      
      stateMap["AL"] = 5.0;
      stateMap["AK"] = 5.9;
      stateMap["AZ"] = 8.0;
      stateMap["AR"] = 3.3;
      stateMap["CA"] = 5.7;
      stateMap["CO"] = 7.0;
      stateMap["CT"] = 6.8;
      stateMap["DE"] = 4.4;
      stateMap["FL"] = 5.0;
      stateMap["GA"] = 4.6;
      stateMap["HI"] = 5.4;
      stateMap["ID"] = 5.5;
      stateMap["IL"] = 4.4;
      stateMap["IN"] = 3.6;
      stateMap["IA"] = 5.0;
      stateMap["KS"] = 6.0;
      stateMap["KY"] = 5.1;
      stateMap["LA"] = 5.2;
      stateMap["ME"] = 3.6;
      stateMap["MD"] = 4.4;
      stateMap["MA"] = 3.6;
      stateMap["MI"] = 3.3;
      stateMap["MN"] = 3.5;
      stateMap["MS"] = 5.5;
      stateMap["MO"] = 5.6;
      stateMap["MT"] = 5.3;
      stateMap["NE"] = 6.0;
      stateMap["NV"] = 7.9;
      stateMap["NH"] = 3.6;
      stateMap["NJ"] = 4.2;
      stateMap["NM"] = 7.8;
      stateMap["NY"] = 3.4;
      stateMap["NC"] = 4.5;
      stateMap["ND"] = 5.1;
      stateMap["OH"] = 4.0;
      stateMap["OK"] = 6.3;
      stateMap["OR"] = 5.4;
      stateMap["PA"] = 4.0;
      stateMap["RI"] = 3.7;
      stateMap["SC"] = 5.1;
      stateMap["SD"] = 5.9;
      stateMap["TN"] = 5.2;
      stateMap["TX"] = 5.8;
      stateMap["UT"] = 7.9;
      stateMap["VT"] = 3.7;
      stateMap["VA"] = 4.2;
      stateMap["WA"] = 4.4;
      stateMap["WV"] = 4.4;
      stateMap["WI"] = 4.7;
      stateMap["WY"] = 7.0;


      var solarPanelYield = .14;
      var performanceRatio = .9;

      var stateSun = stateMap[stat];
      var panelArea = area;
    
      var energy = 1.0 * panelArea * solarPanelYield * stateSun * performanceRatio * 24 * 365;
      //alert("energy: " + energy);    

      } 
    });
  });
  }
}




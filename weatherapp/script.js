var temp,min,max,wind_speed,hum,dis,img,day,night;


 
 img=document.querySelector("#img");
 function weather(){
 var input=document.getElementById("input");
var url="http://api.openweathermap.org/data/2.5/weather?"
var key="d006878d86e335ab28e98a8f1064fb52";
var myurl=url+"appid="+key+"&units=metric&q="+input.value;
 
fetch(myurl)
    .then(function(response){
   console.log(response)
   return response.json()
    }
    )
    .then(function(data){
      console.log(data)
     temp=data.main.temp;
      document.getElementById("temp").innerHTML=Math.round(temp)+"&deg;"+"c";
      min=data.main.temp_max;
      max=data.main.temp_min;
      document.getElementById("min-max").innerHTML=max+"&deg;"+"c"+" "+"/"+" "+min+"&deg;"+"c";
      wind_speed=data.wind.speed;
     document.getElementById("speed").innerHTML="&#127788;"+wind_speed+" "+"mph"
     hum=data.main.humidity;
     document.getElementById("hum").innerHTML="&#x1F321;"+hum+'%'
     dis=data.weather[0].description;
     document.getElementById("dis").innerHTML=dis;
   var icon="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    img.src=icon;
    
   
   
    })
   
};
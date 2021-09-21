function time(){
    date=new Date();
   var hour= document.getElementById("hour").innerHTML=date.getHours();
   var minutes= document.getElementById("minutes").innerHTML=date.getMinutes();
   var seconds=document.getElementById("seconds").innerHTML=date.getSeconds();
   setInterval(time,1000)
   //condition
    if(hour==0){
        hour=12;
    }
   else if(hour>12){
       document.getElementById("hour").innerHTML=hour-12;
         document.getElementById("dn").innerHTML= "PM";
   }
   
   if(hour<10){
    document.getElementById("hour").innerHTML="0"+hour;
 }
 if(seconds<10){
    document.getElementById("seconds").innerHTML="0"+seconds;
 }
 if(minutes<10){
  document.getElementById("minutes").innerHTML="0"+minutes;
 }
}
time();

    var gethours=0,getmin=0,getsec=0,time_out,hour,minutes,second;

    function start(){
        
      hour=document.getElementById("hours");
      minutes=document.getElementById("minutes");
     second=document.getElementById("seconds")
            if(getsec>=0) {
                getsec++;
             second.innerHTML=getsec;
             
            }
             
         if(getsec>=60){
             getmin++;
             getsec=0;
             minutes.innerHTML=getmin;
         }
         if(getmin<10){
             minutes.innerHTML="0"+getmin;
         }
         if(getsec<10){
             second.innerHTML="0"+getsec;
         }
         if(getmin>=60){
             getmin=0;
             gethours++;
             hour.innerHTML=gethours;
             
         }
         if(gethours<10){
             hour.innerHTML="0"+gethours;
         }
        
        time_out= setTimeout(start,1000);
    }
   function stop(){
        clearTimeout(time_out);
   }
   function reset(){
       if(getsec>=0){
        gethours=0;
        getmin=0;
        getsec=0;
       second.innerHTML="0"+getsec;
       hour.innerHTML="0"+gethours;
       second.innerHTML="0"+getsec;
       }
      
   }
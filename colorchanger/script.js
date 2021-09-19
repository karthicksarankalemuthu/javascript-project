
 function addcolor(){
     let symples="123456789ABCDEF";
     let color="#";
     for(var i=0;i<6;i++){
        color=color + symples[Math.floor(Math.random() * 16)]  
     }
    document.body.style.background =color;
    document.getElementById("hex").innerHTML=color;
 }
   
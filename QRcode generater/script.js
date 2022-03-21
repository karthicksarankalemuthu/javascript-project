let btn=document.getElementById("btn");
let input=document.getElementById("input");
let qrcode=document.getElementById("qrcode");
let qrcodeimg=document.getElementById("qrcodeimg");



btn.addEventListener("click",(e)=>{
    e.preventDefault();
    var txt=input.value;
   const url= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+txt;
   qrcodeimg.src=url
   qrcode.innerHTML="QRcode for"+" "+txt
   input.value=""
})

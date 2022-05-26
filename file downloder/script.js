let input=document.getElementById("input");
let btn=document.getElementById("btn");

btn.addEventListener("click",(e)=>{
  e.preventDefault();
  btn.innerText="downloading......";
    fetchdownload(input.value)
})
 function fetchdownload(url)
 {

fetch(url).then(res=>res.blob()).then(file=>{
    let temurl=URL.createObjectURL(file);
    let atag=document.createElement("a");
    atag.href=temurl;
    atag.download=url.replace(/^.*[\\\/]/, '');
    document.body.appendChild(atag);
    atag.click();
    atag.remove();
    URL.revokeObjectURL(temurl);
    btn.innerText="download file";
})
 }
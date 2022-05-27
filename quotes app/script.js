let quotes=document.getElementById("quotes");
let author=document.getElementById("author");
let btn=document.getElementById("btn");
let sound=document.getElementById("sound");
let copy=document.getElementById("copy");
let twitter=document.getElementById("twitter");


btn.addEventListener("click",()=>{
    btn.innerText="loadding...";
    getquotes();

})

sound.addEventListener("click",()=>{
    
    let utterance=new SpeechSynthesisUtterance(`${quotes.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterance);
})

copy.addEventListener("click",()=>{
     navigator.clipboard.writeText(quotes.innerText);
})

twitter.addEventListener("click",()=>{
    let tweeturl=`https://twitter.com/intent/tweet?url=${quotes.innerText}`;
   window.open(tweeturl,"_blank");

})
function getquotes(){

    fetch("http://api.quotable.io/random").then(res=>res.json()).then(respo=>{
        quotes.innerText=respo.content;
        author.innerText=respo.author;
        btn.innerText="New quotes";
    })
}
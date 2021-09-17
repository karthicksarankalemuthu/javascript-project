 
 
let input=document.querySelector("#input");
let list=document.querySelector(".list");


function add(){
    if(input.value==""){
    alert("enter some task");}
    else{
        // create li tag
        let li =document.createElement("li");
        let text=document.createTextNode(input.value);
        li.appendChild(text);
        list.appendChild(li);
        // create strik event
        li.addEventListener("click",(e)=>{
            e.target.classList.toggle("strik");
        })
      
        // create remove button
        let button=document.createElement("button");
        button.classList.add("remove");
        button.innerHTML='&times;';
        li.appendChild(button);
        list.appendChild(li);
        //remove event
        button.addEventListener("click",(e)=>{
            let li=e.target.parentElement;
            li.parentElement.removeChild(li);
        })

    }
    input.value="";

}
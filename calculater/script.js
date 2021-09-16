   var input=document.getElementById("input")
   function dis(num){
     input.value+=num;
}
 function eqal(){
     try{
         input.value=eval(input.value);
     }
     catch(err){
          alert("syntex error");
     }
 }
 function cl(){
     input.value = "";
 }
 function del(){
     input.value=input.value.slice(0,-1);
 }


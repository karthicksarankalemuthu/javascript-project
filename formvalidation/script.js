
 let username=document.getElementById('username');
 let email=document.getElementById("email");
 let phonenumber=document.getElementById("phonenumber");
 let password=document.getElementById("password");
 
 function validation(){
       // username validation
       if(username.value==""){
            document.getElementById("usererr").innerHTML='<i class="fas fa-exclamation-circle">please enter the username</i>';
            username.focus();
            username.style.border="5px solid red";
             return false;
          }
          else{
                username.style.border="5px solid green";
                document.getElementById("usererr").innerHTML='<i class="far fa-check-circle" style=color:green>valid</i>';
          }
       //email validation
      let regexp=/^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/;
       if(email.value=="" ||!regexp.test(email.value)){
           document.getElementById("emailerr").innerHTML='<i class="fas fa-exclamation-circle">please enter the email</i>';;
             email.focus();
            email.style.border="5px solid red";
             return false;
       }  
       else{
            email.style.border="5px solid green";
            document.getElementById("emailerr").innerHTML='<i class="far fa-check-circle" style=color:green>valid</i>';
      } 
      // phonenumber validation
        let phoneno=/^\d{10}$/;
       if(phonenumber.value==""||isNaN(phonenumber.value)||!phoneno.test(phonenumber.value)) {
       document.getElementById("phonenumbererr").innerHTML='<i class="fas fa-exclamation-circle">please enter the phonenumber</i>';
           phonenumber.focus();
           phonenumber.style.border="5px solid red"
            return false;
       }
      
       else{
            phonenumber.style.border="5px solid green";
            document.getElementById("phonenumbererr").innerHTML='<i class="far fa-check-circle" style=color:green>valid</i>';
            
      }
      // password validation
       if(password.value==""){
            document.getElementById("passworderr").innerHTML='<i class="fas fa-exclamation-circle">please enter the password</i>';
            password.focus();
            password.style.border="5px solid red"
             return false;
       }
       else{
            password.style.border="5px solid green";
            document.getElementById("passsworderr").innerHTML='<i class="far fa-check-circle" style=color:green>valid</i>';
      }
      
 };
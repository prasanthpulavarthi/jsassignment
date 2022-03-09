let emailnode=document.getElementById("email");
let emailerror=document.getElementById("error1");

let pwdnode=document.getElementById("pwd");
let pwderror=document.getElementById("error2");



let border1= "2px solid red"
let border2 ="2px solid green"
 
function validate1(){
    emailerror.textContent=""
    let email = emailnode.value;
    let ss=email.substring(email.indexOf('@')+1);
    if (email == '') {
        emailerror.textContent = "this field is required"
        emailnode.style.border = border1;
        return false;
    }else if(!email.includes("@")|| ss=='') {
       emailerror.textContent = "Please put valid email";
       return false;
    }
    else {
        emailnode.style.border = border2;
        return true;
} 
    
}

function validate2(){
    pwderror.textContent="";
    let pwd = pwdnode.value;
    if (pwd == '') {
        pwderror.textContent = "this field is required"
        pwdnode.style.border = border1;
        return false;
    } else if(pwd.length<8 ){
        pwderror.textContent="password length must be greater than 8";
        pwdnode.style.border=border1;
        return false;

    } else if(pwd.length>24 ){
        pwderror.textContent="password length must be less than 24";
        pwdnode.style.border=border1;
        return false;
    }
    else{
    
        pwdnode.style.border=border2;
        return true;
    }


}




function validateForm(){
    let st1=validate1();
    let st2=validate2();

    return st1 && st2;
}

const checkRemember = document.getElementById("rememberme");
  	if(localStorage.checkbox !== ""){
  		checkRemember.setAttribute("checked", "checked");
  		emailnode.value = localStorage.username;
  		pwdnode.value = localStorage.password;
  	}
  	else{
  		checkRemember.removeAttribute("checked");
  		emailnode.value = "";
  		pwdnode.value = "";
 	}

  checkRemember.addEventListener("click", function(){
  	if(checkRemember.checked && emailnode.value && pwdnode.value !== ""){
  		localStorage.username = emailnode.value;
  		localStorage.password = pwdnode.value;
  		localStorage.checkbox = checkRemember.value;
  	}

  	else{
  		localStorage.username = "";
  		localStorage.password = "";
 		localStorage.checkbox = "";
 	}

   });
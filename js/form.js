let fnameNode = document.getElementById("fname");
let unameNode = document.getElementById("uname")
let emailNode = document.getElementById("email")
let mobileNode = document.getElementById("mobile")
let ageNode = document.getElementById("age")

let  tdNode1 = document.getElementById("error1")
let  tdNode2 = document.getElementById("error2")
let  tdNode3 = document.getElementById("error3")
let  tdNode4 = document.getElementById("error4")
let  tdNode5 = document.getElementById("error5")

let border1 = "2px solid red";
let border2 = "2px solid green";


function validate1() {
    tdNode1.textContent = " "
     let fname = fnameNode.value;
     let regExp=new RegExp("^[A-Za-z]*$");
     if (fname == '') {
         tdNode1.textContent = "this field is required"
         fnameNode.style.border = border1;
         return false;
     }else if(regExp.test(fname)==false) {
        tdNode1.textContent = "name should be only alphabets"
        return false;
    }
     else {
        fnameNode.style.border = border2;
        return true;

     }

}

function validate2() {
    tdNode2.textContent = " "
    let uname = unameNode.value;
    
    if (uname == '') {
         tdNode2.textContent = "this field is required"
        unameNode.style.border = border1;
        return false;
    }else if(uname.length<3 || uname.length>10){
        tdNode2.textContent = "uname must have atleast 3 and atmost 10 chars";
        unameNode.style.border = border1;
        return false;
    }
    else {
       unameNode.style.border = border2;
       return true;
    }
}



function validate3() {
    tdNode3.textContent=""
    let email = emailNode.value;
    let ss=email.substring(email.indexOf('@')+1);
    if (email == '') {
        tdNode3.textContent = "this field is required"
        emailNode.style.border = border1;
        return false;
    }else if(!email.includes("@")|| ss=='') {
       tdNode3.textContent = "Please put valid email";
       return false;
    }
    else {
        emailNode.style.border = border2;
        return true;
} 
}
function validate4() {
    let mobile = mobileNode.value;
    let regExp=new RegExp("^[0-9]*$");
    tdNode4.textContent="";

    if ( mobile == '') {
        tdNode4.textContent = "this field is required"
        mobileNode.style.border = border1;
        return false;
    }else if(regExp.test(mobile)==false){
        tdNode4.textContent = "should contain only digits";
        mobileNode.style.border =border1;
        return false;
    }else if((mobile.length<10) || (mobile.length>10)){
        tdNode4.textContent="must be 10 digits";
        mobileNode.style.border=border1;
        return false;
    }
    else {
        mobileNode.style.border = border2;
        return true;
} 
}
function validate5() {
    tdNode5.textContent=""
    let age = ageNode.value;

    if ( age == '') {
        tdNode5.textContent = "this field is required"
       ageNode.style.border = border1;
       return false;
    }else if(age<1 || age>110){
      tdNode5.textContent="please put valid age";
      ageNode.style.border=border1;
      return false;
    }
    else {
        ageNode.style.border = border2;
        return true;
} 
}


function validateForm(){
    let st1=validate1();
    let st2=validate2();
    let st3=validate3();
    let st4=validate4();
    let st5=validate5();
    return st1 &&  st2 && st3 && st4 && st5;
}
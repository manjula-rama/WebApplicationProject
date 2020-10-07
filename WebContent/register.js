function validate() {
//var user=document.getElementById('name').value;
var password=document.getElementById('pw').value;
var cpassword=document.getElementById('cpw').value;
var mobile=document.getElementById('mobile').value;
var email=document.getElementById('eid').value;

var regex= /^[a-zA-Z. ]{2,30}$/;
var name = document.getElementById("uname");
if(regex.test(name.value)) {
	document.getElementById("u").innerHTML="<font color=green>welcome to"+name.value+"</font>";
	
}
else {
	document.getElementById("u").innerHTML="<font color=red>**please enter the name</font>";
}

/*var passw=  /^[A-Za-z]\w{7,14}$/;
var pname = document.getElementById("pw");
if(passw.test(pname.value)) {
	document.getElementById("p").innerHTML="<font color=green>password is strong"</font>";
	
}
else {
	document.getElementById("p").innerHTML="<font color=red>**please enter password</font>";
}*/

/*if(user=="") {
document.getElementById('u').innerHTML="<font color=red>**please fill the username field</font>";
return false;
}
if((user.length<3)||(user.length>20)) {
document.getElementById('u').innerHTML="<font color=red>**user length must between 3 and 20</font>";
return false;
}
if(!isNaN(user)) {
document.getElementById('u').innerHTML="<font color=red>**user field must contain characters only</font>";
return false;
}*/

if(password=="") {
var user=document.getElementById('p').innerHTML="<font color=red>**please fill the password field</font>";
return false;
}
if((password.length<3)||(password.length>20)) {
document.getElementById('p').innerHTML="<font color=red>**password length must between 3 and 20</font>";
return false;
}
if(password!=cpassword) {
document.getElementById('p').innerHTML="<font color=red>**password and confirm password must be same</font>";
return false;
}
if(cpassword=="") {
document.getElementById('c').innerHTML="<font color=red>**please fill the confirmpassword field</font>";
return false;
}
if(mobile=="") {
document.getElementById('m').innerHTML="<font color=red>**please fill the mobile field</font>";
return false;
}
if(isNaN(mobile)) {
document.getElementById('m').innerHTML="<font color=red>**moblie number must have digits</font>";
return false;
}
if(mobile.length!=10) {
document.getElementById('m').innerHTML="<font color=red>**mobile number must have 10 digits</font>";
return false;
}

if(email=="") {
document.getElementById('e').innerHTML="<font color=red>**please fill the email field</font>";
return false;
}



}
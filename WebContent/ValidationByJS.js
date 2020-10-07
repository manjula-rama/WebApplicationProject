function validate() {
	var user=document.getElementById('uname').value;
	var password=document.getElementById('pwd').value;
	var mobile=document.getElementById('mobile').value;
	var email=document.getElementById('eid').value;

	let userreg= /^[a-zA-Z. ]{2,30}$/;
	
	if(userreg.test(user)) {
		document.getElementById('u').innerHTML="";
	}
	else {
		document.getElementById('u').innerHTML="<font color=red>**enter name</font>";
	}
	
	let passreg=  /^[a-zA-Z]\w{7,14}$/;
	if(passreg.test(password)) {
		document.getElementById('p').innerHTML="";
	}
	else {
		document.getElementById('p').innerHTML="<font color=red>**please fill the password field</font>";
	}
	let emailreg=  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(emailreg.test(email)) {
		document.getElementById('e').innerHTML="";
	}
	else {
		document.getElementById('e').innerHTML="<font color=red>**please fill the email field</font>";
	}
	let mobilereg= /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
	if(mobilereg.test(mobile)) {
		document.getElementById('m').innerHTML="";
	}
	else {
		document.getElementById('m').innerHTML="<font color=red>**please fill the username field</font>";
	}
}
function validate() {
	/*var regex= /^[a-zA-Z. ]{2,30}$/;
	var name = document.getElementById("uname");
	if(regex.test(name.value)) {
		document.getElementById("demo").innerHTML="<font color=green>welcome to"+name.value+"</font>";
		
	}
	else {
		document.getElementById("demo").innerHTML="<font color=red>error</font>";
	}*/
	/*var phoneno = /^\d{10}$/;
	var name = document.getElementById("uname");
	if(phoneno.test(name.value)) {
		document.getElementById("demo").innerHTML="<font color=green>welcome to"+name.value+"</font>";
		
	}
	else {
		document.getElementById("demo").innerHTML="<font color=red>error</font>";
	}*/
	var passw=  /^[A-Za-z]\w{7,14}$/;
	var name = document.getElementById("uname");
	if(passw.test(name.value)) {
		document.getElementById("demo").innerHTML="<font color=green>welcome to"+name.value+"</font>";
		
	}
	else {
		document.getElementById("demo").innerHTML="<font color=red>error</font>";
	}
}
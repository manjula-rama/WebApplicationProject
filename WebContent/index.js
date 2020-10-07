function addNumbers () {
	var sum=0;
	var num1=document.getElementById('num1');
	var num2=document.getElementById('num2');
	
	if(num1==" "||num2==" ") {
		document.getElementById("demo").innerHTML="input not valid";
		
	}
	if(isNaN(num1)||isNaN(num2)) {
		document.getElementById("demo").innerHTML="input not valid";
	}
	num1=Number(num1.value);
	num2=Number(num2.value);
	if(num1==0||num2==0) {
		document.getElementById("demo").innerHTML="input not valid";
	}
	sum=num1+num2;
	console.log("sum="+sum);
	var result=document.getElementById('result');
	result.innerHTML="result is"+sum;
}
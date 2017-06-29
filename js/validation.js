var arrindex,val1,val2,flag1=0,flag2=0;
function validatecaptcha()
{
	var inp, result;
	inp= document.getElementById("usrval").value;
	switch(arrindex)
	{
		case 0: result=val1+val2;
		break;
		case 1: result=val1-val2;
		break;
		case 2: result=val1*val2;
		break;
		case 3: result=(Math.floor(val1/val2));
		break;
	}
	if(result==inp)
		{
			alert(" Captcha Validated Correctly!");
		}
	else{
			alert("Captcha Invalid");
		}
}
function generateCaptcha()
{
	var cap;
	var opt = ["+", "-", "*", "/"];
	val1= (Math.floor(Math.random() * (99 - 10) ) + 10);
	arrindex=(Math.floor(Math.random() * (3 - 0) ) + 0);
	val2= (Math.floor(Math.random() * (99 - 10) ) + 10);
	cap=val1+opt[arrindex]+val2;
	document.getElementById('captcha').innerHTML=cap;
}
function validatefname(e){
	var k,keypressed;
	var keyC = "spnfname";
	
	k=document.getElementById('fname').value;
	if(window.event){
	keypressed=e.keyCode;
	}
	if(k.length>25)
	{
		alert("Can not enter more than 25 characters");
	}
	else
	if(k.trim()==="")
	{
		document.getElementById(keyC).style.color='red';
		document.getElementById("spnfname").innerHTML = "cant Enter just spaces";
					
	}
	else
	if(!(keypressed>=65 && keypressed<=90 || keypressed>=97 && keypressed<=122 || keypressed===32 || keypressed===8))
	{	
		document.getElementById("spnfname").style.color='red';
		document.getElementById("spnfname").innerHTML = "Enter Alphabets only";
	}
	else
	{
		document.getElementById("spnfname").innerHTML = "";	
	}
	if(k==="")
	{
		document.getElementById("spnfname").innerHTML = "";	
	}
				
	
}
function validatelname(e){
	var k,keypressed;
	k=document.getElementById('lname').value;
	if(window.event){
	keypressed=e.keyCode;
	}
	if(k.length>25)
	{
		alert("Can not enter more than 25 characters");
	}
	else
	if(k.trim()==="")
	{
		document.getElementById("spnlname").style.color='red';
		document.getElementById("spnlname").innerHTML = "cant Enter just spaces";
					
	}
	else
	if(!(keypressed>=65 && keypressed<=90 || keypressed>=97 && keypressed<=122 || keypressed===32 || keypressed===8))
	{	
		document.getElementById("spnlname").style.color='red';
		document.getElementById("spnlname").innerHTML = "Enter Alphabets only";
	}
	else
	{
		document.getElementById("spnlname").innerHTML = "";	
	}
	if(k==="")
	{
		document.getElementById("spnlname").innerHTML = "";	
	}	
}
function validateemail(e)
{
	var k,keypressed;	
	console.log(flag1+" "+flag2);
	k=document.getElementById('email').value;

	if(window.event)
	{
	keypressed=e.keyCode;
	}
	var msg1="", msg2="";
	
	if(k.length>25)
	{
		alert("Can not enter more than 25 characters");
	}
	else
	if(keypressed===32)
	{
		alert("can not Enter spaces in email!");
	}
	
	if(flag1===0)
	{
		if(keypressed!==16)
			msg1+= "Email must have a '@'!";
		else
		{
			flag1 = 1;
			msg1="";
		}
		document.getElementById("spnemail").style.color='red';
		document.getElementById("spnemail").innerHTML = msg1+msg2;
			
	}
	if(flag2===0)
	{
		if(keypressed!==190)
			msg2+= "Email must have a '.'";
		else
		{
			flag2 = 1;
			msg2="";
		}
		document.getElementById("spnemail").style.color='red';
		document.getElementById("spnemail").innerHTML = msg1+msg2;
		
	}
	if(k==="")
	{
		flag1=0;flag2=0;
		document.getElementById("spnemail").innerHTML = "";
	}
			
}
function validatepwd1()
{
	x = document.getElementById('pw1').value;
	if(x.trim()==="")
	{
		document.getElementById("spnpw").style.color='red';
		document.getElementById("spnpw").innerHTML = "cant Enter just spaces";
	}
	else
	if(x.length < 8 || x.length > 25)
	{
		document.getElementById("spnpw").style.color='red';
		document.getElementById("spnpw").innerHTML = "Enter a password between 8-25 characters";
	}
	else
	{
		document.getElementById("spnpw").innerHTML = "";
	}
	if(x ===""){
		document.getElementById("spnpw").innerHTML = "";
	}	
}
function validatepwd2()
{
	var x,y;
	x = document.getElementById('pw1').value;
	y = document.getElementById('pw2').value;
	if(y.trim()==="")
	{
		document.getElementById("spnpw").style.color='red';
		document.getElementById("spnpw").innerHTML = "cant Enter just spaces";
	} 
	else if(y.length < 8 || y.length > 25)
	{
		document.getElementById("spnpw").style.color='red';
		document.getElementById("spnpw").innerHTML = "Enter a password between 8-25 characters";
	}
	else if(x!=y)
	{
		document.getElementById("spnpw").style.color='red';
		document.getElementById("spnpw").innerHTML = "Passwords do not match!";
	}
	else
	{
		document.getElementById("spnpw").innerHTML = " ";
	}
	if(x ==="")
	{
		document.getElementById("spnpw").innerHTML = "";
	}	
}
function validatephone(e)
{
	var x,keypressed;
	x= document.getElementById("ph").value;
	if(window.event)
	{
		keypressed=e.keyCode;
	}
	console.log(x+" "+keypressed);
	if(x.trim()==="")
	{
		document.getElementById("spnphn").style.color='red';
		document.getElementById("spnphn").innerHTML = "cant Enter just spaces";
	}
	else
	if(keypressed<48 || keypressed>57 || x.length <10 || x.length >15)
	{
		document.getElementById("spnphn").style.color='red';
		document.getElementById("spnphn").innerHTML = "Invalid Number! Enter numbers having 10-15 Digits";
	}
	else
	{
		document.getElementById("spnphn").innerHTML = "";
	}
	
	if(x==="")
	{
		document.getElementById("spnphn").innerHTML = "";
	}				
}
function validateaddress()
{
	var  x = document.getElementById("address").value;
	if(x.length>75)
	{
		alert("Can not enter more than 75 characters");
	}else
	if(x.trim()==="")
	{
		document.getElementById("spnadd").style.color='red';
		document.getElementById("spnadd").innerHTML = "cant Enter just spaces";
	}
	if(x==="")
	{
		document.getElementById("spnadd").innerHTML = "";
	}
}


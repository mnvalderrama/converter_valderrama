document.writeln("Name: Mark Christian N. Valderrama");
function cebpac(){
	var a=[],b=[],c,d,e,f=[],g=[],h=[],i,j;
	
	
	a=(document.getElementById("a").value);
	b=(document.getElementById("b").value);
	c=(document.getElementById("gender").value);
	f=(document.getElementById("f").value);
	g=(document.getElementById("g").value);
	h=(document.getElementById("h").value);
	i=(document.getElementById("i").value);
	j=(document.getElementById("j").value);
	
	if(a==""||b==""||c=="Select Gender"||f==""||g==""||h==""||i==""||j==""){
		alert("Please fill in all fields."); 
	}
	else if(!f.includes('@')){
		alert("Please input a complete e-mail address.");
	}
	else if(j<=i){
		alert("Return date must be later than Departure date.");
	}
	else{
		document.getElementById("display3").innerHTML = "Last Name: " +a; 
		document.getElementById("display4").innerHTML = "First Name: " +b; 
		document.getElementById("display10").innerHTML = "Gender: " +c; 
		document.getElementById("display5").innerHTML = "E-mail address: " +f; 
		document.getElementById("display6").innerHTML = "Origin: " +g; 
		document.getElementById("display7").innerHTML = "Destionation: " +h; 
		document.getElementById("display8").innerHTML = "Departure Date: " +i; 
		document.getElementById("display9").innerHTML = "Return Date: " +j; 
	}
}

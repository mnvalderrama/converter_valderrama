document.write("Program to convert a positive integer into binary.<br/>");
document.writeln("Name: Mark Christian N. Valderrama");
function converter(){
	var n1;
	var temp;
	var a;
	var bin=[];
	var length;
	var i;
	
	n1=Number(document.getElementById("n1").value);
	temp=n1;
	
	while(temp!=0){
		a = temp%2;
		bin.push(a);
		temp=Math.trunc(temp/2);
	}
	
//	length = bin.length									this algo also works but it prints comma between each element.
//	for (i = length; i >= 0; i--) bin.push(bin[i]);	      
														
//	length = bin.length / 2;
//	for (i = 0; i < length; i++) bin.shift();		
	
		document.getElementById("display").innerHTML = "The integer " +n1+ " is ";
	while(bin.length!=0){
		document.getElementById("display").innerHTML += ""+bin.pop()+"";
	}	
		document.getElementById("display").innerHTML += " in binary." ;
}


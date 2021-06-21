function add(){
var input1 = Number(document.getElementById('input1').value);
var input2 = Number(document.getElementById('input2').value);
var o= input1+input2;
document.getElementById('output').value= o;
}

function subtract(){
var input1 = Number(document.getElementById('input1').value);
var input2 = Number(document.getElementById('input2').value);
var o= input1-input2;
document.getElementById('output').value= o;
}

function multiply(){
var input1 = Number(document.getElementById('input1').value);
var input2 = Number(document.getElementById('input2').value);
var o= input1*input2;
document.getElementById('output').value= o;
}

function division(){
var input1 = Number(document.getElementById('input1').value);
var input2 = Number(document.getElementById('input2').value);
var o= input1/input2;
document.getElementById('output').value= o;
}

function reset(){
	document.getElementById('input1').value=0;
	document.getElementById('input2').value=0;
	document.getElementById('output').value= "";
	document.getElementById('scientificInput').value="";
}
function scientific(){
document.getElementById('scientific').display.style="";
}
function sin(){
	
	const sinvalue = Number(document.getElementById('scientificInput').value);
	document.getElementById('scientificInput').value = Math.sin(sinvalue).toFixed(2);
}
function cos(){
	
	const cosvalue = Number(document.getElementById('scientificInput').value);
	document.getElementById('scientificInput').value = Math.cos(cosvalue).toFixed(2);
}
function tan(){
	
	const tanvalue = Number(document.getElementById('scientificInput').value);
	document.getElementById('scientificInput').value = Math.tan(tanvalue).toFixed(2);
}
function sqrt(){
const sqrtValue = Number(document.getElementById('scientificInput').value);
	document.getElementById('scientificInput').value = Math.sqrt(sqrtValue).toFixed(2);
}
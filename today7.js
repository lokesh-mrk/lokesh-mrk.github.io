function sum(){
	console.log('Hello Mirketa');
	var no= document.getElementById('t1').value;
	var mul=2*no;
	console.log(mul);
}
function doubl(){
	var num= document.getElementById('t1').value;
	document.getElementById('result').textContent='Result is' + '  '+ 2*num;
}
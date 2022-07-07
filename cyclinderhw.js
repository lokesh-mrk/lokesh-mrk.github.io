function find(){
	var num1 = document.getElementById('t1').value;
	var num2 = document.getElementById('t2').value;
	var area = 2*3.14*num1*num2;
	var volume= 3.14*num1*num1*num2;
	
	document.getElementById('t3').value = area;
	document.getElementById('t4').value = volume;
}
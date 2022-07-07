function find(){
	var num1 = document.getElementById('t1').value;
	var area = num1*num1;
	var perimeter = 4*num1;
	document.getElementById('t2').value = area;
	document.getElementById('t3').value = perimeter;
}
function find(){
	var num1 = document.getElementById('t1').value;
	var num2 = document.getElementById('t2').value;
	var area = num2*num1;
	var perimeter = 2*(parseInt(num1)+parseInt(num2));
	document.getElementById('t3').value=area;
	document.getElementById('t4').value=perimeter;
}
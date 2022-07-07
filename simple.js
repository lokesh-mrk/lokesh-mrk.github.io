function add(){
	var n1 = document.getElementById('T1').value;
	var n2 = document.getElementById('T2').value;
	var n3 = document.getElementById('T3').value;
	var sum = parseInt(n1)* parseInt(n2)* parseInt(n3)/100;
	document.getElementById('result').value=sum;
}
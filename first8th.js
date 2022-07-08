function spanFunction(){
	var firstVar = document.getElementById('text').value;
	//console.log('firstVar');
	
	document.getElementById('id1').textContent = 'value is:'+ firstVar;
}

function newFunction(){
	var x='apple ';
	x = x + ' ' + 'banana ';///apple, Banana/////////
	x = x + ' ' + 'orange ';////apple, Banana, orange//////
	document.getElementById('id1').textContent = x; ////	assign value ////
}

function new2Function(){
	var a = 1;	
	a=a+3;//4 value//
	a=a+1;// 5 output is given//
	a++; //6 value beacuse of increment ///
	a= a+2;////8 ////////
	a = a+ ' is my lucky number';
	document.getElementById('id1').textContent= a;
	
}

function loopExe(){
	var a = 0;
	var b = document.getElementById('text').value;
	var c = document.getElementById('text1').value;
	var t= '<table class="table table-dark"><tbody>';
//////// for loop operation perform//////
	for(a=1; a<=c; a++){ 
	
	t= t +'<tr><td>' + a + ' </td><td>' + ' x ' + '</td><td>'+  b +' </td><td>' + '=' + '</td><td> ' +( a * b) + '</td></tr>';		
	}
	t = t + '</tbody></table>';
	document.getElementById('id1').innerHTML='value is '+ t;	
	
	console.log(t);
	
}
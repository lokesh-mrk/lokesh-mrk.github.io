function sort(){
	var n1 = document.getElementById('loki').value;
	var n2 = document.getElementById('gaidhane').value;
	console.log(n1.length);
	console.log(n2.length);
	
	if(n2.length > n1.length){
		document.getElementById('loki').value = n2;
		document.getElementById('gaidhane').value = n1;
	}
	
}
function Asending(){
	var n1 = document.getElementById('loki').value;
	var n2 = document.getElementById('gaidhane').value;
    console.log(n1.length);
	console.log(n2.length);
	
	
		if(n1.length > n2.length){
		document.getElementById('loki').value = n2;
		document.getElementById('gaidhane').value = n1;
}

	
}
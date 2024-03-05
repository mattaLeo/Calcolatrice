const txtOperation = document.getElementById("txtOperation");

function writeValue(value){
	txtOperation.innerText += value;
}

function calculate(){
	let risultato = eval(txtOperation.innerText);
	txtOperation.innerText = risultato;
}

function reset(){
	txtOperation.innerText = "";
}

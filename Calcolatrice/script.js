const txtOperation = document.getElementById("operation");

function writeValue(){
	txtOperation.innerText + this.value;
}

function calculate(){
	let risultato = eval(txtOperation.innerText);
	txtOperation.innerText = risultato;
}

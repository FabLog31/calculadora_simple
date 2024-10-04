
// Esta es la función de sumar solamente 
function sumar() {
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);
	let resultado = num1 + num2;
	document.getElementById("Resultado").value = resultado;
}

// Esta es la función de restar solamente
function restar() {
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);
	let resultado = num1 - num2;
	document.getElementById("Resultado").value = resultado;
}
// Esta es la función de multiplicar solamente
function multiplicar() {
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);
	let resultado = num1 * num2;
	document.getElementById("Resultado").value = resultado;
}
// Esta es la función de dividir solamente
function dividir() {
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);
	let resultado = num1 / num2;
	document.getElementById("Resultado").value = resultado;
}
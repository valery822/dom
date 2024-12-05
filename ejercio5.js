let botonOk = document.querySelector("#ok");
botonOk.addEventListener("click", () => {
let n1 = document.querySelector("#num1").value;
let n2 = document.querySelector("#num2").value;
let resul = document.querySelector("#resultado");
n1 = parseInt(n1);
n2 = parseInt(n2);
let suma = n1 + n2;
alert(suma);
resul.value = suma;
});
//declaración de variables
var numeroEnProceso = "";
var num1 = 0;
var cifras = 0;
var simbolo;
var numeroAcabado = 0;
var opera;
var coma = 0;
console.log(numeroEnProceso);
//función que escribe el número tecleado
function numero(numero) {
  if (numeroAcabado == 1) {
    numeroEnProceso = "";
    console.log(numero);
    numeroEnProceso += numero;
    refrescar(numeroEnProceso);
    numeroAcabado = 0;
  } else {
    console.log(numero);
    numeroEnProceso += numero;
    refrescar(numeroEnProceso);
  }
}
function decimal() {
  if (coma == 0) {
    numero(".");
    coma = 1;
  } else {
    numero(0);
  }
}
function retro() {
  cifras = numeroEnProceso.length;
  numeroEnProceso = numeroEnProceso.substr("", cifras - 1);
  refrescar(numeroEnProceso);
}
function refrescar(x) {
  document.getElementById("textoPantalla").value = x;
}
function borradoParcial() {
  numeroEnProceso = "";
  refrescar(numeroEnProceso);
  numeroAcabado = 0;
}
function borradoTotal() {
  numeroEnProceso = "";
  num1 = 0;
  refrescar(numeroEnProceso);
  numeroAcabado = 0;
}
function operar(s) {
  coma = 0;
  if (opera == 1) {
    simbolo = s;
  } else {
    simbolo = s;
    num1 = numeroEnProceso;
    numeroEnProceso = "";
    opera = 1;
  }
}
//si pulso 2 veces un operando me da problems
function igualar() {
  coma = 0;
  if (numeroAcabado == 1) {
    refrescar(numeroEnProceso);
  } else {
    numeroEnProceso = num1 + simbolo + numeroEnProceso;
    numeroEnProceso = eval(numeroEnProceso);
    refrescar(numeroEnProceso);
    num1 = 0;
    numeroAcabado = 1;
    opera = 0;
  }
}
function raiz() {
  numeroEnProceso = Math.sqrt(numeroEnProceso);
  refrescar(numeroEnProceso);
  numeroAcabado = 1;
}
function porcent() {
  numeroEnProceso = numeroEnProceso / 100;
  refrescar(numeroEnProceso);
  numeroAcabado = 1;
}
function inve() {
  numeroEnProceso = 1 / numeroEnProceso;
  refrescar(numeroEnProceso);
  numeroAcabado = 1;
}
function opuesto() {
  numeroEnProceso = numeroEnProceso * -1;
  refrescar(numeroEnProceso);
}

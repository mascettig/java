let apellido = prompt("ingresar su apellido");
let nombre = prompt("ingresar tu nombre");

if ((nombre != "") && (apellido != "")){
   alert("Nombre:" +nombre + "\nApellido:"+apellido)
 }
else{
    alert("Error !!");
} 


//let tuEdad = prompt("ingresar tu edad");

//if (tuEdad == 30){
//alert("Estas habilitado para ver el contenido de esta Pagina");
//} else if (tuEdad <18) {
 //   alert("el contenido de esta pagina es para mayores de 18")
    
//} else {
 //   alert("Esta pagina es para jovenes de 30 jajaja")
    
 //}
//let inicio = prompt("ingrese un numero")
//let fin = 110
//for (inicio; inicio<= fin; inicio++) {
 //   console.log(inicio);
//}

//while (nombre != "Hola"){
 //   switch (nombre){
 //       case "Tomas":
 //           alert("Hola Tomas");
 //           break;
 //       case "Gustavo":
 //           alert("Hola Gustavo");
 //           break
 //       default:
 //           alert("No sos Bienvenido")
 //           break;
  //  }
 //nombre = prompt("ingrese un nombre")
//}

let campera = prompt ("Cuanto Sale la campera")
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x *0.21;

let precioProducto = 2500;
let precioCantidad = 500;

let nuevoPrecio = resta(suma (precioProducto, iva(precioProducto)), precioCantidad);
console.log(nuevoPrecio);

const PrimerNumero = parseFloat(prompt("ingresar el primer numero:"));
const operador = prompt("ingresar un operador (+ - * /):");
const SegundoNumero = parseFloat(prompt("Ingresar el segundo numero:"));
function calculadora (operadorDeFuncion, numero1, numero2){
  switch(operadorDeFuncion) {
    case "+":
    return numero1 + numero2;

    case "-":
    return numero1 - numero2;

    case "*":
      return numero1 * numero2;

    case "/":
      return numero1 / numero2;

    default:
      return "operacion Invalida";

  }
}
console.log(calculadora(operador, PrimerNumero, SegundoNumero));

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

function Persona(litetal){
  this.nombre = litetal.nombre;
  this.edad = litetal.edad;
  this.localidad = literal.localidad;
  this.hablar = function(){console.log("Hola Soy"+ this.nombre)
}
const persona1 = new Persona ({ nombre: "San Martin", edad: 39, localidad:"yapeyu"})
persona1.hablar();

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre.Pantalon(),
    this.precio = parseFloat(precio);
    this.vendido = false;
  }
  sumarIva(){
    this.precio = this.precio * 1.21;
  }
  vender(){
    this.vendido = true;
  }
}
const producto1 = new Producto ("pantalon", "5000");
const producto2 = new Producto ("Campera", "6500");
producto1.sumarIva () ; 
producto2.sumarIva () ;
producto1.vender() ;}

let lista = document.createElement("h2");
lista.innerHTML = "Anime Que Me gustan";
document.body.appendChild(lista);

let personas = ["Caballeros del Zodiaco, Dr Stone , Dragonball Z, Detective Conan"];
for (const persona of personas) {
  let li = document.createElement ("li");
  li.innerHTML = persona;
  document.getElementById("personas").appendChild(li);
}

let boton = document.getElementById("btn");
boton.addEventListener("click",respuesta);
function respuesta(){
  console.log("Respuesta de boton")
}

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("sufmit", validarformulario);

function validarformulario(e){
  e.preventDefault();
  let formulario = e.target;
  console.log(formulario.childre[0].value);
  console.log(formulario.children[1].value);
  console.log(formulario.childre[2].value);
  console.log(formulario.childre[3].value);
  console.log(formulario.childre[4].value);
  console.log(formulario.childre[5].value);
  console.log(formulario.childre[6].value);


}
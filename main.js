let apellido = prompt("ingresar su apellido");
let nombre = prompt("ingresar tu nombre");

if ((nombre != "") && (apellido != "")){
   alert("Nombre:" +nombre + "\nApellido:"+apellido)
 }
else{
    alert("Error !!");
} 


let tuEdad = prompt("ingresar tu edad");

if (tuEdad == 30){
alert("Estas habilitado para ver el contenido de esta Pagina");
} else if (tuEdad <18) {
    alert("el contenido de esta pagina es para mayores de 18")
    
} else {
    alert("Esta pagina es para jovenes de 30 jajaja")
    
 }
let inicio = prompt("ingrese un numero")
let fin = 100
for (inicio; inicio<= fin; inicio++) {
    console.log(inicio);
}

while (nombre != "Hola"){
    switch (nombre){
        case "Tomas":
            alert("Hola Tomas");
            break;
        case "Gustavo":
            alert("Hola Gustavo");
            break
        default:
            alert("No sos Bienvenido")
            break;
    }
 nombre = prompt("ingrese un nombre")
}

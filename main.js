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


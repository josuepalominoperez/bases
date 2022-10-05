//funcion tradicional
/* function saludo(nombre){
    frase= `Hola ${nombre} ¿como estas?`;
    document.write(frase);
}

saludo("juan") */


//Funcion flecha
var saludo = (nombre)=>{
frase="Hola ¿como estas? " + nombre;
document.write(frase);
}

saludo("pepe");


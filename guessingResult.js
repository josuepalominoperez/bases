//bucle hasta que adivine el resultado

alert("Tendrás que ingresar el valor correcto de la suma");
let valor= prompt("¿cuánto es 8 +4");

while(valor!==12){
    alert("suma incorrecta");
    valor= prompt("¿cuánto es 8 +4");
    if(valor==12){
        alert("la suma es correcta");
        break;
    }
    
}
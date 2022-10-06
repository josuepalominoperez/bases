/*
Dejar pasar solo a los mayores de 18
La primera persona que entre despues de las 2am , no paga
*/
let free= false;

let validarEntrada = (time)=>{
let edad = prompt("¿cual es tu edad?");
if(edad>18){
    if(time>=2 && time<7 && free==false){
        alert("puedes entrar gratis");
        free=true;
    }
    else{
        alert(`siendo ${time}:00Hs puedes entrar pero pagarás`);
    }
}
else{
    alert("sos menor de edad , no podes entrar");
}
}


validarEntrada(23);
validarEntrada(24);
validarEntrada(2);
validarEntrada(3);
validarEntrada(4);

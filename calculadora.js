const sumar= (num1,num2)=>{
    return parseInt(num1)+ parseInt(num2);
}

const restar=(num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const multiplicar=(num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

const dividir=(num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}


alert("¿qué operación deseas realizar?");
let operacion= prompt("1:suma  2:resta   3:multiplicación   4:división");
if(operacion==1){
    let numero1= prompt("Ingresa el primer número: ");
    let numero2= prompt("Ingresa el segundo valor: ");
    resultado= sumar(numero1,numero2);
    alert(`la suma es ${resultado}`);
}

else if(operacion==2){
    let numero1 = prompt("Ingresa el primer número; ");
    let numero2 = prompt("Ingresa el segundo valor: ");
    resultado= restar(numero1,numero2);
    alert(`la resta es ${resultado}`);
}

else if (operacion==3){
    let numero1= prompt("Ingresa el primer valor: ");
    let numero2= prompt("Ingresa el segundo valor: ");
    resultado=multiplicar(numero1,numero2);
    alert(`la multiplicación es ${resultado}`);
}

else if(operacion==4){
    let numero1=prompt("Ingresa el primer valor: ");
    let numero2=prompt("Ingresa el segundo valor: ");
    resultado=dividir(numero1,numero2);
    alert(`la división es ${resultado}`);
}
else{
    alert("Opción inválida");
}
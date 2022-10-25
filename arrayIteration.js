//Map
//En simples palabras , crea un nuevo array y mapea según lo que se envía
const numbers1=[2,4,6,8,10];
const numbers2=numbers1.map(myFunction);
document.write(numbers2+"<br>");

function myFunction(value,index,array){
    return value*2;
}



//Filter
//Como su nombre indica , aplica un filtro según la condición dada
const numbers3=[100,40,50,20];
const numbers4=numbers3.filter(myFunction2);
document.write(numbers4+"<br>");

function myFunction2(value,index,array){
    return value>41;
}



//Reduce
/*No reduce el array original , al emplear dicha función y asiganrla en 
una const-let sumará todos sus valores
*/
const numbers5=[1,2,3,4,5];
const numbers6=numbers5.reduce(myFunction3);
document.write(numbers6);

function myFunction3(total,value,index,array){
    return total+value;
}
(()=>{
/*
El concepto de tuplas es relativo , como en este ejemplo puse 
[string,number] = ['Dr Strange' , 100] , pero puedo agregar n tipos y sus respectivos valores
Ejemplo 2 --> [string,number,boolean,number] = ['Dr Strange' , 100,false,30];
*/
const heroe:[string,number] = ['Dr Strange' , 100];
heroe[0]="Batman";
heroe[1]=20;
document.write(heroe+"<br>");


})()
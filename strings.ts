
//Función anónima autoinvocada
(()=>{

let batman:string="Batman";
/*La palabra undefined normalmente es una palabra reservada pero 
en este caso vemos que sí es posible usarlo como nombre 
pero no es recomendable
*/
const undefined:string='Superheroe1';

document.write(`I'm ${batman}` +"<br>");
document.write(`I'm ${undefined}` +"<br>");
document.write(batman.toUpperCase()+"<br>");
document.write(batman[10]?.toUpperCase() || "No está presente");




})()
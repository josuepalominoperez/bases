

(()=>{
/*El tipo any da la libertad de que el valor sea cambiante , puede ser String
y luego asignarse cono number u otro tipo (boolean,etc)
pero no tendré facilidad en los llamados de sus métodos y todo lo haré amnualmente
como por ejemplo el charAt() , toFixed() se tuvieron que digitar ya que "avenger" 
no es un tipo específico*/    
let avenger:any = 123;
let exists;
let power;

avenger='Dr Strange';
document.write(avenger.charAt(0)+"<br>");

avenger=150.24252;
document.write(avenger.toFixed(2)+"<br>");

document.write(exists+"<br>");
document.write(power+"<br>");



})()
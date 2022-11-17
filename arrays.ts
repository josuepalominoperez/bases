(()=>{

const Anumbers:number[] =[1,2,3,4,5,6,7,8,9,10];
const Bnumbers:(string | number)[] =[1,2,3,4,5,"6",7,8,9,10];
const villains =['Omega Rojo', 'Dormammu' , 'Duende Verde'];

villains.forEach( v=>document.write(v.toUpperCase()+"<br>") );

Bnumbers.forEach( b=>document.write(b+"<br>") );
})()
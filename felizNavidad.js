setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
  if(d.getHours()==0 && d.getMinutes()==0){
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds()+"<br>";
  document.getElementById("demo2").innerHTML="Feliz navidad";
  }
}
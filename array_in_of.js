let animales= ["perro" , "gato" , "vaca"];

for (animal in animales) {
   document.write(animal + "<br>");
}

document.write("<br>");


for(animal of animales){
    document.write(animal+"<br>");
}
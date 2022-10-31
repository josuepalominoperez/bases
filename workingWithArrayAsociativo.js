//Recorriendo Array asociativo mediante for in
const pc = {
  nombre: "MiPC",
  procesador: "Intel i3",
  ram:"4gb"
};

let txt = "";
for (let x in pc) {
txt += pc[x] + " ";

};
document.write(txt); //MiPC Intel i3 4gb




//Recorriendo array asociativo y obteniendo valores con comas
//Object.values() converts an object to an array.
const pc2 = {
  nombre: "MiPC",
  procesador: "Intel i5",
  ram:"8gb"
};

document.write(Object.values(pc2)); //MiPC,Intel i5,8gb

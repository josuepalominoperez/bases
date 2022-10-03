let pc = {
    nombre: "MiPC",
    procesador: "Intel i3",
    ram:"4gb"
};

let nombre = pc["nombre"];
let procesador = pc["procesador"];
frase = `el nombre es: ${nombre} <br>
         el procesador es: ${procesador}<br>
`;

document.write(frase);
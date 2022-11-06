let nombre= "pero";
const promise= new Promise((resolve,reject)=>{
    if(nombre!=="pedro") reject("Lo siento , el nombre no es pedro");
    else resolve(nombre)
})

promise.then((resultado)=>{
    document.write(resultado)
}).catch((e)=>{
    document.write(e)
})
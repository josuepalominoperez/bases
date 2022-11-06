const obtenerInformacion=(text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(text)},Math.random()*200)
    })
}

const mostrarData = async ()=>{
    data1= await obtenerInformacion("1:pedrito");
    data2= await obtenerInformacion("2:lily");
    data3= await obtenerInformacion("3:pablo");
    document.write(data1+"<br>");
    document.write(data2+"<br>");
    document.write(data3+"<br>");
}

mostrarData();
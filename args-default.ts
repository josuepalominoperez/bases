(()=>{

    const fullName = (firstName:string , lastName?:string , opc:boolean=false):string =>{
     if(opc){
        return `${firstName} ${lastName||'-----'}`.toUpperCase();
     }
     else{
        return `${firstName} ${lastName||'-----'}`;
     }
        
    }

    console.log(fullName('Tony','Stark',true));

})()
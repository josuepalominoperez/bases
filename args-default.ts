(()=>{

    const fullName = (firstName:string , lastName?:string , opc:boolean=false):string =>{
     if(opc){
        return `${firstName} ${lastName||'no last name'}`.toUpperCase();
     }
     else{
        return `${firstName} ${lastName||'-----'}`;
     }
        
    }

    console.log(fullName('Tony','Stark',true));

})()
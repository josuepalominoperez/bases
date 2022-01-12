(()=>{

    const fullName = (firstName:string , ...RestArgs:string[]):string =>{
     return `${firstName} ${RestArgs.join(' ')}`
    }

    const superman = fullName ('Clark' , 'Joseph' , 'Kent');
    console.log(superman)
})()
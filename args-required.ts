(()=>{

const fullName = (firstName:string , lastName:string):string => {
return `${firstName} ${lastName}`;
}

const name= fullName('Maria' , 'Lopez');
console.log(name);
})()
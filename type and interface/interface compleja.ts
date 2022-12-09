(()=>{

interface Client {
    name:string,
    age?:number,
    address: Address
}

interface Address{
    id:number,
    zip:string,
    city:string
}


const client1:Client = {
    name:"Pablo",
    age:25,
    address:{
        id:1,
        zip:"A1",
        city:"Ottawa"
    }
}


const client2:Client = {
    name:"Raul",
    age:26,
    address:{
        id:2,
        zip:"A2",
        city:"Ottawa"
    }
}


})()
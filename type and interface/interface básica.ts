(()=>{

    interface Hero  {
        name:string,
        age?:number,
        powers:string[],
        getName?:() =>string;
    }

    let flash:Hero ={
        name:'Dad',
        age:24,
        powers:['velocity' , 'strength']
    }

    let superman:Hero ={
        name:'Grandfather',
        age:34,
        powers:['velocity'],
        getName() {
            return this.name;
        },
    }


})()
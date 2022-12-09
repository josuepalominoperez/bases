(()=>{

    type Hero = {
        name:string,
        age?:number,
        powers:number[],
        getName?:() =>string;
    }

    let myCustomVariable: (string | number | Hero ) = 'Dad';
    console.log(typeof myCustomVariable)

    myCustomVariable=20
    console.log(typeof myCustomVariable)

    myCustomVariable ={
        name:'Buddy',
        age:40,
        powers: [1]
    }

    console.log(typeof myCustomVariable)
    console.log(myCustomVariable)


})()
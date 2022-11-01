/*
rest Parameter allows a function to treat an indefinite number of arguments as an array
*/
//En este ejemplo sumaremos todos los valores que se digiten
function sum(...args) {
    let sum = 0;
    for (let arg of args) 
    sum += arg;
    return sum;
  }
  
  let x = sum(4, 10, 16); 
  
  document.write(x); //30
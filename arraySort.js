//Sorting string elements
let fruits=["Banana","Coconut","Apple"];
fruits.sort();

document.write(fruits+"<br>");


//Reverse sort
fruits.reverse();
document.write(fruits+"<br>");



//Sorting numbers
let numbers=[7,4,9,3,2,8];
numbers.sort(function(a,b){return a - b});
document.write(numbers+"<br>");


//Sorting numbers in reverse
let numbers2=[7,4,9,3,2,8];
numbers.sort(function(a,b){return b - a});
document.write(numbers);
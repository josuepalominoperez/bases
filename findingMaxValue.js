//Given an array , find max value
let numbers=[1, 123, 500, 115, 44, 88];
numbers.sort(function(a,b){return a - b});
let number= numbers[numbers.length-1];
document.write(number+"<br>");



//or we can take and pass array as a parameter
document.write(Math.max.apply(null, [1,2,3]));

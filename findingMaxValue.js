let numbers=[1, 123, 500, 115, 44, 88];
numbers.sort(function(a,b){return a - b});
let number= numbers[numbers.length-1];
document.write(number+"<br>");
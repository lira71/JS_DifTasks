let num = 266219;

let numString = num + '';
let mas = numString.split('');

let masProd = mas.reduce((a, b) => a*b, 1);

let masDeg = masProd ** 3;
console.log(masDeg);

let degString = masDeg + '';
let result = degString.substring(0, 2);

alert(result);
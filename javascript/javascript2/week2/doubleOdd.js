let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let newNumbers = [];

const doubled = numbers
.filter(num => num%2!== 0)
.map(num => num*2);

console.log(doubled);
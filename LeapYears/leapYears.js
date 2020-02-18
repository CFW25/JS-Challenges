const isLeap = year => Number.isInteger(year / 400) ? true 
: Number.isInteger(year / 4) && !Number.isInteger(year / 100) ? true
: false; 

const isLeapTwo = y => y %400 === 0 || y %4 === 0 && y %100 !== 0;

console.log(isLeap(2020));
console.log(isLeap(1800));
console.log(isLeap(2000));
console.log(isLeap(2019));
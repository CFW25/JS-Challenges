function arrayOfMultiples(num, length) {
    let arr = [];
    for (let i=1; i<=length; i++){
        arr.push(num*i);
    }
    return arr;
}

const arrayOfMultiplesTwo = (num, length) => 
    Array.from({length}, (_,i) => num *(i+1));

console.log(arrayOfMultiplesTwo(12,10));
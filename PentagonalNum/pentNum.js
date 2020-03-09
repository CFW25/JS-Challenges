function pentagonal(num){
    let total =0;
    for(let i=1;i<num;i++){
        total += (num-i)*5
    }
    return total + 1
}
const pentagonalTwo = n => (5 * Math.pow(n, 2) - 5 * n + 2) / 2;

console.log(pentagonal(43))
console.log(pentagonal(8))
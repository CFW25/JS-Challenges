function calcDeterminant(m){
    return (m[0][0] *= m[1][1]) - (m[0][1] *= m[1][0]);
}
const calcDeterminantTwo = ([[a, b], [c, d]]) => a * d - b * c;

console.log(calcDeterminant([
    [1, 2],
    [3, 4]
]));
console.log(calcDeterminant([
    [5, 3],
    [3, 1]
]));
console.log(calcDeterminant([
    [1, 1],
    [1, 1]
]));
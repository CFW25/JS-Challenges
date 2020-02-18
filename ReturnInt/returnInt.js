function returnOnlyInteger(arr){
    let intarr = []
    for(let i=0;i<arr.length;i++){
        if(Number.isInteger(arr[i])){
            intarr.push(arr[i]);
        }
    }
    return intarr;
}
const returnOnlyIntegerTwo = arr => arr.filter(Number.isInteger)

console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16]));
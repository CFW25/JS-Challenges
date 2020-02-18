
function multiplyByLength(arr){
    for(let i in arr){
        arr[i] *= arr.length
    }
    return arr
}
multiplyByLengthtwo = arr => arr.map(x=>x*arr.length)
console.log(multiplyByLength([4, 1, 1]))
function negate(arr){
    for(let i=0; i<arr.length;i++){
        arr[i] *= -1
    }
    return(arr)
}

console.log(negate([3,-5,6]))
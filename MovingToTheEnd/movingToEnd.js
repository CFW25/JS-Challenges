function moveToEnd(arr, el){
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === el){
            arr.push(arr[i])
            arr.splice(i, 1)
        }
    }
    return arr;
}

function moveToEndTwo(arr, el) {
	return arr.sort((a)=>a==el?1:-1)
}

console.log(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9))
console.log(moveToEnd(["a", [9,2,9], 9, 1, 2, 3, 4], 9))
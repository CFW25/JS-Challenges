function existsHigher(arr, num){
    let val = false;
    for(let i=0;i<arr.length; i++){
        if (arr[i] >= num){
            val = true;
        }
    }
    return val;
}

function existsHigherTwo(arr, n) {
	return Math.max(...arr)>=n
}

const existsHigherThree = (arr, n) => arr.some(num => num >= n);

console.log(existsHigher([5, 3, 15, 22, 4], 4));
// function beautifulDays(i,j,k) {
//     var arr = Array(j - i + 1).fill().map((_, idx) => i + idx)
//     let arrResult = []
//     arr.forEach((val)=>arrResult.push(flipInt(val)));
//     arr.forEach((item,index,checkArr) => checkArr[index] = item - arrResult[index]);
//     // item - current value in the loop
//     // index - index for this value in the array
//     // checkArr - reference to analyzed array 
//     console.log(arr);
//     arr.forEach((val,index)=>arr[index] = val/ k);
//     console.log(Number.isInteger(arr[2]));
//     let arrBool = []
//     console.log(arr.forEach((val)=>arrBool.push(Number.isInteger(val))));
//     console.log(Number.isInteger(arr.forEach((val)=>arr[val])))
// }

// function flipInt(n){
//     var digit, result = 0
//     while( n ) {
//         digit = n % 10
//         result = (result * 10) + digit
//         n = n/10|0
//     }
//     return result
// }

// var result = beautifulDays(10,15,3);
// console.log(result);

//Solution
function beautifulDays(i,j,k) {
    let count=0;
    //Step 1
    for (let x = i; x <= j; x++) {
        //step 4.
        if (isBeautifulDay(x, k)){
            count++;
        }
    }
    //Step 5
    return count;
}

function isBeautifulDay(x, k) {
    //Step 3
    return differenceOfReverse(x) % k === 0;
}

function differenceOfReverse(x) {
    let reversedX = parseInt(
        x
            .toString() //Turn num to string e.g. 12 = '12'
            .split('') //Split into array '12' = ['1','2']
            .reverse() //Reverse the array ['1','2'] = ['2','1']
            .join('') //Joins array '21'
    ); //Turns back into num '21' = 21
    //Step 2
    return Math.abs(x - reversedX); //
}

console.log(beautifulDays(10,15,3));


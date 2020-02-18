
function birthdayCakeCandles(arr){
    const val = Math.max(...arr);
    var count = 0;

    for(var i = 0; i < arr.length; ++i){
        if(arr[i] == val)
        count++;
    }
    return count;
}

function birthdayCakeCandlesSol(arr) {
    // Step 1
    let max = 0;
    let counter = 0;

    // Step 2 (a)
    arr.forEach(item => {
        // Step 3
        if (item > max) {
            // Step 4
            max = item;
            counter = 1;
            // Step 2 (b)
        } else if (item === max) {
            counter++;
        }
    });

    return counter;
}

function birthdayCakeCandlesSolTwo(arr) {
    let max = Math.max(...arr);
    return arr.filter(item => item === max).length;
}

console.log(birthdayCakeCandlesSolTwo([1,2,3,4,4]));
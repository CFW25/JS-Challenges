function canCapture(arr){
    if (arr[0].charAt(0) == arr[1].charAt(0) 
    || arr[0].charAt(1) == arr[1].charAt(01)){
        return true;
    }
    else{
        return false;
    }
}

const canCaptureTwo = arr => arr[0].charAt(0) == arr[1].charAt(0) 
|| arr[0].charAt(1) == arr[1].charAt(01) ? true : false;

const canCaptureThree = arr => arr[0][0] === arr[1][0] || arr[0][1] === arr[1][1];

console.log(canCapture(["A8", "E8"]));
console.log(canCapture(["A1", "B2"]));
console.log(canCapture(["F5", "C8"]));
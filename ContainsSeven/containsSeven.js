function checkString(arr){
    for(let i=0;i<arr.length;i++){
        if (arr[i].toString().includes(7)){
            return true
        }
    }
}
const sevenBoom = (arr) => checkString(arr) === true ? "Boom!" : "there is no 7 in the array"
const sevenBoomTwo = arr => /7/.test(arr) ? 'Boom!' : 'there is no 7 in the array';
const sevenBoomThree = arr => arr.join().includes('7')? 'Boom!' : 'there is no 7 in the array'; 

console.log(sevenBoomThree([1, 2, 3, 4, 5, 6]))
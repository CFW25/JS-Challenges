function descOrder(num){
    var digits = Array.from(num.toString()).map(Number);
    digits.sort((a,b) => b-a)
    let result = digits.join('')
    return result;
}

console.log(descOrder(1234545671));
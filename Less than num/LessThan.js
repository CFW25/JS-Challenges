function LessThan(num1,num2,less){
    if(num1+num2 <= less){
        return true;
    }
    else{
        return false;
    }
}
function LessThanN(num1,num2,less) {
    return (num1 + num2 < less ? true : false)
}

console.log(LessThanN(1,5,15));
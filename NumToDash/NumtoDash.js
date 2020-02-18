function Go(num) {
    let str=""
    for(let i=0;i<num;i++){
        str+="-"
    }
    return str;
}

function GoTwo(num) {
    return "-".repeat(num);
}

const GoThree = num => '-'.repeat(num);

console.log(GoThree(5));
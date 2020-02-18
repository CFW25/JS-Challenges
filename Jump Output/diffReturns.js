function sc(val){
    for(i = 0; i<val; i++) {
        if(val == 1){
            console.log("Safe")
        }
        else if (i+1 == val && val < 6 || i+2 == val && val > 6){
            console.log("Pa!")
        }
        else if (i+1 == val && val > 6) {
            console.log("Aa!")
        }
        else {
        console.log("Aa~")
        }
    }
}

function scTernary(val){
    let arr=[]
    for(i=-1;i<val;i++){
        arr.push(
        i == 0 && val == 1 ? "good luck!" :
        i+2 == val && val < 6 || val > 6 && i+1 == val ? "Pa!" :
        i+1 == val && val < 6 ? "Aa!" :
        "Aa~")
    }
    return arr;
} 

function scFor(floor){
    if (floor <=1) return "";
    var shout="";
    for(let i=0;i<floor-1; i++) {
        shout += "Aa~ ";
    }
    shout += "Pa!";
    if (floor <= 6) shout += " Aa!";
    return shout;
}

function scThree(floor){
    if(floor<=1) return "";
    return 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor<=6 ? ' Aa!': '');
}

function scFour(floor){
    const sc = floor => floor > 1 ? Array.from({length : floor - 1}, () => "Aa~").concat(floor > 6 ? ["Pa!"] : ["Pa!", "Aa!"]).join(" ") : "";
}

console.log(scThree(1))
console.log(scThree(5))
console.log(scFor(5))
console.log(scFour(5))

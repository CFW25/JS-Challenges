function rogerShots(shots){
    time = 0;
    count = 6;
    for(let i=0; i<shots.length;i++){
        if(count>0){
        if(shots[i] == "Bang!"){
            time += 0.5;
            count - 1;
        }
        else if (shots[i] == "BangBang!"){
            time += 0.5;
            count -2;
        }
        }
        
    }
    return time;
}

const rogerShotsTwo = arr => {
    return arr.filter(v => /^(Bang){1,2}!/.test(v)).length / 2;
}

console.log(rogerShotsTwo(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]));
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]));
console.log(rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]));
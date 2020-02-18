function bowlingScore(pins){
    let score=0;
    let spare=new Array(11).fill(false);
    let strike=new Array(11).fill(false);

    for(let frame=1;frame <=10; frame++) {
        const first = pins.shift();
        score += first;
        if (strike[frame - 1] && strike[frame -2]) score += first;
        if (strike[frame -1] || spare[frame -1]) score += first;
        if (first === 10) {
            strike[frame] = true;
            if (frame !== 10) continue;
        }

        const second = pins.shift();
        score += second;
        if (strike[frame -1]) score += second;
        if (first + second === 10) {
            spare[frame] = true;
        }

        if ((strike[frame] || spare[frame]) && frame === 10) {
            score += pins.shift();
        }
    }
    return score;
}

console.log(bowlingScore([10,10,10,10,10,10,10,10,10,10,10,0]));
console.log(bowlingScore([5,5,5,5,10,10,10,10,10,10,10,10,10,0]));
console.log(bowlingScore([5,4,5,5,10,10,10,10,10,10,10,10,10,10]));
console.log(bowlingScore([10,10,10,10,10,10,10,10,10,10,10,10]));
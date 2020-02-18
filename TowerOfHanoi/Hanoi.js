function towerHanoi(discs){
    return Math.pow(2,discs) - 1;
}

function towerHanoiTwo(discs){
    let moves = 0;
    (function play(discs) {
        if(discs > 0) {
            play(discs - 1);
            moves++
            play(discs - 1);
        }
    }(discs));
    return moves;
}

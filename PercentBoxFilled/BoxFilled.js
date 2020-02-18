function percentFilled(box){
    let count, filled, total;
    count = occurances(box, " ");
    filled = occurances(box, "o");
    total = count+filled;
    return Math.round(filled/total * 100) + "%";
}
function occurances(string, subString, allowOverlapping){
    string +="";
    subString +="";
    if (subString.length <= 0) return (string.length +1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;
    
    while(true) {
        pos = string.indexOf(subString,pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}

const percentFilledTwo = box => {
    let arr = [...box.join("")],
        fil = arr.filter(v => v === "o").length,
        tot = arr.filter(v => v !== "#").length;
    return `${Math.round(fil / tot * 100)}%`;
}
function percentFilledThree(box) {
    const max = (box.length - 2) * (box[0].length - 2);
    const o = (box.join('').match(/o/g) || []).length;
    return `${Math.round(o / max * 100)}%`;
}

percentFilled([
    "####",
    "#  #",
    "#o #",
    "####"
]);
percentFilledTwo([
  "#######",
  "#o oo #",
  "#######"
])
percentFilledThree([
  "######",
  "#ooo #",
  "#oo  #",
  "#    #",
  "#    #",
  "######"
])
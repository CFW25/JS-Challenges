
function getIndexToIns(arrayP, num1){    
    arrayP.push(num1)
    arrayP.sort(function(a,b){return a - b});
    const pos = arrayP.indexOf(num1)
    console.dir(pos);
}

getIndexToIns([20, 3, 5], 19);


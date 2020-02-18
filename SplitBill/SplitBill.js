function billSplit(spicy,cost){
    let bill = [0,0];
    for(let i=0; i<spicy.length;i++){
        if(spicy[i] == "S"){
            bill[0] += cost[i];
        }
        else {
            bill[0] += cost[i]/2;
            bill[1] += cost[i]/2;
        }
    }
    return bill;
}

function billSplitTwo(spicy,cost) {
    let you = spicy.map((x,i) => x === 'S'? cost[i]: cost[i]/2).reduce((a,b)=>a+b);
    let friend = spicy.map((x,i) => x === 'S'? 0: cost[i]/2).reduce((a,b)=>a+b);
    return [you,friend];
}

console.log(billSplitTwo(["N", "S"], [10, 10]));
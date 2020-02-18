function getDiscounts(arr,val) {
    let percent = Number(val.replace("%", ""));
    let ans =[]
    for(let i=0;i<arr.length;i++){
        ans.push((percent / 100) * arr[i]);
    }
    return ans;
    
}

console.log(getDiscounts([2, 4, 6, 11], "50%"));
console.log(getDiscounts([10, 20, 40, 80], "75%"));
console.log(getDiscounts([100], "45%"));
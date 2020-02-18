function changeEnough(change, amountDue){
    change[0] *= 0.25
    change[1] *= 0.10
    change[2] *= 0.05
    change[3] *= 0.01
    return amountDue >= change.reduce((a,b) => a+b)
}
function changeEnoughT(change, amountDue) {
	let sum = change[0]*0.25 + change[1]*0.1 + change[2]*0.05 + change[3]*0.01;
	return sum >= amountDue;
}
console.log(changeEnough([1, 0, 5, 219], 19.99));
console.log(changeEnough([25, 20, 5, 0], 4.25));
function primesBelowNum(n) {
	let arr = [2];
	for (let i = 3; i <= n; i +=2){
		if (arr.every(a => i % a != 0)){ 
				arr.push(i);
		}
	}
	return arr;
}

console.log(primesBelowNum(3));
function canAlternate(s) {
	let numZeros = 0;
	let numOnes = 0;
	for (let letter of s) {
		letter === '0' ? numZeros++ : numOnes++;
	}
	return Math.abs(numZeros - numOnes) <= 1;
}

const canAlternateTwo = s =>
Math.abs(s.replace(/0/g,'').length - s.replace(/1/g,'').length) <= 1;

console.log(canAlternateTwo("010001"));
console.log(canAlternate("0001111"));
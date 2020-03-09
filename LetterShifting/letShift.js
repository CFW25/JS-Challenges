function shiftLettersTwo(str, n) {
	var spaceIndex = [];

	str.split("").forEach((char, i) => {
		if (char == " ") {
			spaceIndex.push(i)
		}
	});

	var letterArray = str.split("").filter(x => x != " ");
	for(var i = 0; i < n; i++) {
		letterArray.unshift(letterArray.pop());
	}
	var stepper = 0;

	return letterArray.map((char, i) => {
		if(spaceIndex.includes(i + stepper)) {
			stepper += 1;
			return ` ${char}`;
		} else {
			return char;
		}
	}).join("");
}

const shiftLetters = (str, n) => {
	let arr = [...str.replace(/ /g, "")],
			stk = str.split(" ").map(wrd => wrd.length);
	for (let i = 0; i < n; i++) arr.unshift(arr.pop());
	return stk.map(len => arr.splice(0, len).join("")).join(" ");
}

console.log(shiftLetters("B o o3 d aserf m ", 2))
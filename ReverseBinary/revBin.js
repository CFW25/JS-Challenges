const reversedBinaryInteger=num=>
	parseInt(""+[...num.toString(2)].reverse().join``,2)

const revBinaryInt=num=>parseInt(num.toString(2).split('').reduce((rev, char) => char + rev, ''),2)

function revInt (int) {
    let newInt = int.toString(2).split('').reduce((rev, char) => char + rev, '')
    return parseInt(newInt, 2)
}

console.log(revBinaryInt(10))
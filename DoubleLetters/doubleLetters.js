let double = /([a-zA-Z]).*?\1/.test("munchkin")
// let re = /^([a-z])\1+$/;
let re = /(.)\1/;
console.log(re.test("teasat"))

console.log(double)


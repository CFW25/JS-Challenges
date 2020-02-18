const reverse = (bool) => typeof bool === "boolean" ? !bool : "boolean expected"; 

console.log(reverse(true));
console.log(reverse(false));
console.log(reverse(1));
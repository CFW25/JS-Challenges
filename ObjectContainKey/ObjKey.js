function hasKey(obj, key){
    return obj.hasOwnProperty(key);
}

console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"));
console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"));
console.log(hasKey({ pot: 1, tot: 2, not: 3}, "not"));

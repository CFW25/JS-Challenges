const profitableGamble = (pb,pz,py) => pb * pz > py

console.log(profitableGamble(0.2, 50, 9))
console.log(profitableGamble(0.9, 1, 2))
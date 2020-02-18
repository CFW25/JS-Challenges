function profitMargin(costPrice, salesPrice) {
    let num = (salesPrice - costPrice) / salesPrice * 100;
    return num.toFixed(1).toString() + '%';
}

const profitMarginTwo = (cost, sale) => (100*(sale-cost)/sale).toFixed(1)+'%';

console.log(profitMargin(50, 50));
console.log(profitMargin(28, 39));
console.log(profitMargin(33, 84));
console.log(profitMargin(40, 69));
console.log(profitMargin(45, 75));
console.log(profitMargin(12, 65));
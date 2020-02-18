const zodiacSymbol = dob => {
    let month = new Date(dob).getMonth(),
    day = new Date(dob).getDate(),
    lastDay=[21, 20, 21, 21, 22, 22, 23, 23, 24, 24, 23, 22],
    signs = ["♒", "♓", "♈", "♉", "♊", "♋","♌", "♍", "♎", "♏", "♐", "♑"];

    return day >= lastDay[month]
        ? signs[month]
        : signs[month - 1] || "♑";
}

const monthsData = [
    { threshold: 19, symbols: '♑♒' },
    { threshold: 18, symbols: '♒♓' },
    { threshold: 20, symbols: '♓♈' },
    { threshold: 19, symbols: '♈♉' },
    { threshold: 20, symbols: '♉♊' },
    { threshold: 20, symbols: '♊♋' },
    { threshold: 22, symbols: '♋♌' },
    { threshold: 22, symbols: '♌♍' },
    { threshold: 22, symbols: '♍♎' },
    { threshold: 22, symbols: '♎♏' },
    { threshold: 21, symbols: '♏♐' },
    { threshold: 21, symbols: '♐♑' },
];

const zodiacSymbolTwo = str => {
    const date = new Date(str);
    const { symbols, threshold } = monthsData[date.getMonth()];

    return symbols[Number(date.getDate() > threshold)];
};


console.log(zodiacSymbolTwo("May 9, 1951"));
console.log(zodiacSymbolTwo("June 9, 1951"));
console.log(zodiacSymbolTwo("September 9, 1951"));
console.log(zodiacSymbolTwo("December 9, 1951"));

function daysBetween(date1,date2) {
    const oneDay = 1000 * 60 * 60 * 24;
    console.log(oneDay);
    const differenceMs = Math.abs(date1 - date2);
    console.log(differenceMs);
    console.log(differenceMs / oneDay);
    return Math.round(differenceMs / oneDay);
}

console.log(daysBetween(new Date("September 14, 2010"),new Date("June 20, 2019")));

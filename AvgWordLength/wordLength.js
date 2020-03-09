
function averageWordLength(str) {
    let ans = str.replace(/[^\w]/gi,'').length;
    let arr = str.split(' ').length;
    return Math.round((ans / arr) * 100)/100;
}
averageWordLength("Dude, this is so awesome!");
averageWordLength("What a gorgeous day.");
averageWordLength("A B C");

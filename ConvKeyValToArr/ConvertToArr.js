function objectToArray(obj) {
    for( let[key,value] of Object.entries(obj)) {
        console.log(`["${key}", ${value}]`);
    }
}

function objectToArrayT(obj) {
    console.log(Object.entries(obj));
}

objectToArrayT({
    D: 1,
    B: 2,
    C: 3
})
objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
})
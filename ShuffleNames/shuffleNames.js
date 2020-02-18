function nameShuffle(str){
    str = str.split(' ')
    str = [str[1], str[0]]
    return str.join(' ')
}

const nameShuffleTwo = str => str.split(' ').reverse().join(' ')

console.log(nameShuffle("Donald Trump"))
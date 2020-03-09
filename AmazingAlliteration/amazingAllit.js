function alliterationCorrect(str){
    str = str.toLowerCase()
    let arr = str.split(' ')
    arr = arr.filter(word => word.length > 3)
    let val = false;
    for(let i=1;i<arr.length;i++){
        if(arr[i].charAt(0) == arr[0].charAt(0)){
            val = true;   
        }
        else{
            val = false;
            break;
        }
    }
    return val
}

const alliterationCorrectTwo = sentence => {
    const words = sentence.split(' ').filter(word => word.length > 3);
    const initial = words[0][0];
    return words.every(word => new RegExp(`^${initial}`, 'i').test(word));
};

console.log(alliterationCorrectTwo("He helps harHess happiness."))
function createPhoneNumber(arr) {
    console.log("(" +arr[0].toString() + arr[1].toString() + arr[2].toString() + ") " 
    + arr[3].toString() + arr[4].toString() + arr[5].toString() + "-" 
    + arr[6].toString() + arr[7].toString() + arr[8].toString() + arr[9].toString())

    console.log(`(${arr.slice(0,3).join('')}) ${arr.slice(3,6).join('')}-${arr.slice(6).join('')}`);

    let str = arr.join('');
    console.log(`(${str.substring(0,3)}) ${str.substring(3,6)}-${str.substring(6)}`);

    let mask = '(xxx) xxx-xxxx';
    arr.forEach(item => {
        mask = mask.replace('x', item);
    });
    console.log(mask);
}

createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);
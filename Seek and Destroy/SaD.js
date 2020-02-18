function destroyer(arr1,arg1, arg2, ... argN){
    const a = arr1.toString();
    console.dir(a);
    for(var i = arr1.length -1; i >= 0 ; i--){
        if(arr1[i] == arg1 ||
            arr1[i] == arg2) {
            arr1.splice(i,1);
        }
    }
    const t = arr1.toString();
    console.dir(t);
}

function destroyerTwo(arr) {
    // Step 3.        // Step 1.              // Step 2.
    const destroyerArr = Object.values(arguments).slice(1);

    // Step 4.
    console.dir(arr.filter(x => !destroyerArr.find(y => y === x)));
}

function destroyerThree(arr) {
    return arr.filter(
        x =>
            !Object.values(arguments)
                .slice(1)
                .find(y => y === x)
    );
}
console.log(destroyerThree([1, 2, 3, 2, 3, 1], 2, 3));
destroyerTwo([1, 2, 3, 2, 3, 1], 2, 3);
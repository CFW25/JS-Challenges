function longestStreak(arr) {
    let newArr = Array.from(arr, x => new Date(x.date))
    let streak =0;
    let h = 0;
    for(let i=1; i<newArr.length;i++){
        if(newArr[i].getDate() - newArr[i-1].getDate() != 1){
            h = streak
            streak = 0;
        }
        streak++;
    }
    console.log(h)
}

const longestStreakTwo = arr => {
		// If there are no entries, there can't be a streak!
		if (!arr.length) return 0;

    // Convert dates to values and sort in ascending order
    arr = arr.map(v => +new Date(v.date)).sort((a,b) => a - b);

    // If consecutive dates are one day (i.e. 86,400,000 ms) apart,
    // then map the difference as "1"; otherwise, "0"
    arr = arr.slice(1).map((v,i) => +(v - arr[i] === 86400000)).join('');

    // Find the longest string of consecutive ones, indicating
    // the longest sequence of consecutive days
    return Math.max(...(arr.match(/1+/g) || ['']).map(v => v.length)) + 1;
};

console.log(longestStreakTwo([
    {
    "date": "2019-09-18"
    },
    {
    "date": "2019-09-19"
    },
    {
    "date": "2019-09-20"
    },
    {
    "date": "2019-09-26"
    },
    {
    "date": "2019-09-27"
    },
    {
    "date": "2019-09-30"
    }
]))


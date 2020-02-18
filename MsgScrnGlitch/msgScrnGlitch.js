const val= (19).toString(36)

function messageGlitchFail(msg) {
    let answer = '';
    for(let i=1;i<=26;i++){
        let char = String.fromCharCode((i + 64));
        let re = new RegExp(i)
        msg = msg.replace(re, char)
        console.log(msg)
    }
    msg.replace('T', '5');
    return msg
}

function messageGlitch(txt) {
    return txt.replace(/\d+/g, m => String.fromCharCode(+m + 96));
}

console.log(messageGlitch("T21e19d1y"))
function regularBrackets(brackets) {
    var equal = 0;
    for (var i = 0; i < brackets.length; i++){
        brackets[i] === '(' ? (equal += 1) : (equal -=1);
        if (equal === -1) return false;
    }
    return equal === 0 ? true : false;
}

console.log(regularBrackets('()()()())('));

function regularBracketsSequence2(b) {
    var stack = [];
    for (var i = 0; i < b.length; i++){
        if (b[i] === '(' || b[i] === '[' || b[i] === '{') {
            stack.push(b[i]);
        } else if (
            (b[i].length > 0 &&
            b[i] === ')' && stack[stack.length -1] === '(') ||
            (b[i] === ']' && stack[stack.length -1] === '[') ||
            (b[i] === '}' && stack[stack.length -1] === '{')
        ) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}

console.log(regularBracketsSequence2('(()){{}}[]'));
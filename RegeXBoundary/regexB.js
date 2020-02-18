function isJS(s){
    const regex = RegExp('.js')
    return regex.test(s)
}
function isJSTwo(path) {
	return /jsx?$/.test(path)
}

console.log(isJS("/users/user.js"));
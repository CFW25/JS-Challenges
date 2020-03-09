class Challenge {
	// Build class Challenge: constructor + getter
	constructor(id,level){
		this.id = id;
		this.level = level;
	}
	get points(){
		var obj = {
			"VE" : 5,
			"EA" : 10,
			"ME" : 20,
			"HA" : 40,
			"VH" : 80,
			"EX" : 120
		}
		for (var key in obj){
			if(key == this.level) return obj[key];
		}
	}
}
class User {
	constructor(name,xp,log){
		this.name = name;
		this.xp = xp;
		this.log = log;
	}
	newSolvedChallenge(challenge){
		this.xp += challenge.points;
		this.log.push(challenge.id);
	}
}
// 1. Declare the class instances (two users and six challenges)
var user1 = new User("Madam", 0, []);
var user2 = new User("Steve", 0, []);
var challenge1 = new Challenge(1, "VE");
var challenge2 = new Challenge(2, "EA");
var challenge3 = new Challenge(3, "ME");
var challenge4 = new Challenge(4, "HA");
var challenge5 = new Challenge(5, "VH");
var challenge6 = new Challenge(6, "EX");
// 2. Set the challenges solved by the users
user1.newSolvedChallenge(challenge1);
user1.newSolvedChallenge(challenge4);
user1.newSolvedChallenge(challenge6);

user2.newSolvedChallenge(challenge5);
user2.newSolvedChallenge(challenge3);
user2.newSolvedChallenge(challenge2);

console.log(user1);
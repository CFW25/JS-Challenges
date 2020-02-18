function missingAngle(angle1, angle2) {
    let angle3 = 180 - (angle1+angle2);
    if (angle3 < 90){
        return "acute";
    }
    else if (angle3 == 90){
        return "right";
    }
    else if (angle3 > 90 && angle3 < 180){
        return "obtuse"
    }
}

function missingAngleTwo(angle1,angle2){
    var a = 180 - angle1 - angle2;
    if (a < 90) return 'acute';
    if (a > 90) return 'obtuse';
    return 'right';
}

console.log(missingAngle(11, 20));
console.log(missingAngle(27, 59));
console.log(missingAngle(135, 11));
console.log(missingAngle(45, 45));
const repeatString = function(str, repeater) {
    let newStr = '';
    if (repeater < 0) {return "ERROR"};
    for (let i = 0; i < repeater; i++){
        newStr += str;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;

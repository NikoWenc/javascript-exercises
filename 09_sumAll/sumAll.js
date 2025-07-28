const sumAll = function(a, b) {
    let total = a;
    let min = a;
    let max = b;
    if (min > max) {
        total = b;
        min = b;
        max = a; 
    }else if (min < 0 || max < 0
            || min - Math.floor(min) > 0 || max - Math.floor(max) > 0
            || typeof(min) === 'string' || typeof(max) === 'string' 
            || typeof(min) !== 'number' || typeof(max) !== 'number' ){
        return "ERROR";
    }
    for (min; min < max; min++){
        total += min + 1;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;

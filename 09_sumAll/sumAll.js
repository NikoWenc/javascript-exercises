const sumAll = function(a, b) {
    let [total, min, max] = [a, a, b];
    // reverse the values if first number is higher
    if (min > max) [total, a, b] = [b, b, a];
    if (min < 0 || max < 0) return "ERROR";
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

    for (min; min < max; min++){
        total += min + 1;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;

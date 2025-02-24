const sumAll = function(number1, number2) {
    if (typeof number1 !== "number" || typeof number2 !== "number" || number1 < 0 || number2 < 0 || number1 !== parseInt(number1) || number2 !== parseInt(number2)) {
        return "ERROR";
    }
    let sum = 0;
    for (let i = Math.min(number1, number2); i <= Math.max(number1, number2); ++i) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

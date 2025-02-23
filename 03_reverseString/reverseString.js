const reverseString = function(str) {
    let revStr = "";
    for (letter of str) {
        revStr = letter + revStr;
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;

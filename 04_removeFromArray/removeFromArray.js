const removeFromArray = function(arr, ...del) {
    let i = 0;
    while (i < arr.length) {
        if (del.includes(arr[i])) {
            arr.splice(i, 1);
            continue;
        } else {
            ++i;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

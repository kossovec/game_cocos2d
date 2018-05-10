// Second task
function reverseString(str) {
    let newArray = [];
    for (let i = 0; i < str.length ; i++) {
        newArray[str.length - i] = str[i];
    }
    return newArray.join('');
}

// Third task
function cuntOnes(n){
    let count = 0;
    while (n)
    {
        count += n & 1;
        n >>= 1;
    }
    return count;
}

function cuntOnesRecursion(n) {
    if (n == 0) {
        return 0;
    }

    return (n & 1) + cuntOnesRecursion(n >> 1);
}




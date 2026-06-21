// video 2

// find maximum of 3 numbers

function maxOfThree(a, b, c) {

    if (a > b && a > c) {
        return a;
    }
    if (b > a && b > c) {
        return b;
    }
    return c;
}

console.log(maxOfThree(1, 2, 3));



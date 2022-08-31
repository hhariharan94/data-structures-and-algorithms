// Any num will be called a happy num if, after repeatedly replacing it with a num equal to the sum 
// of the square of all of its digits, leads us to num ‘1’. All other (not-happy) nums will never reach 
// ‘1’. Instead, they will be stuck in a cycle of nums which does not include ‘1’.
function findSquareSum(num) {
    let squareSum = 0;
    while (num !== 0) {
        let digit = num % 10;
        squareSum += (digit * digit);
        num = Math.floor(num / 10);
    }
    return squareSum;
}

function isHappyNumber(num) {
    let numMapper = {};
    let numIterator = num;
    while (!numMapper[numIterator] && numIterator !== 1 && numIterator !== 0) {
        console.log(numIterator);
        numMapper[numIterator] = true;
        numIterator = findSquareSum(numIterator);
    }
    if (numIterator === 1) {
        return true;
    } else {
        return false;
    }
}

function isHappyNumberFastSlowPointer(num) {
    let fastIterator = num;
    let slowIterator = num;
    while (true) {
        slowIterator = findSquareSum(slowIterator);
        fastIterator = findSquareSum(findSquareSum(fastIterator));
        if (slowIterator === fastIterator) {
            break;
        }
    }
    return fastIterator === 1;
}

// console.log(isHappyNumberFastSlowPointer(23));
console.log(isHappyNumberFastSlowPointer(12));
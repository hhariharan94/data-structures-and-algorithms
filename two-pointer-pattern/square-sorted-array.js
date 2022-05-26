// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.
// my solution
function squaredSortedArray(arr) {
    let nonNegativeNumberPointer = -1;
    let negativeNumberPointer = -1;
    const squaredArray = [];
    for (let i=0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            nonNegativeNumberPointer = i;
            negativeNumberPointer = nonNegativeNumberPointer - 1;
            break;
        }
    }
    if (nonNegativeNumberPointer === -1) {
        nonNegativeNumberPointer = arr.length;
        negativeNumberPointer = arr.length - 1;
    }
    // if (nonNegativeNumberPointer === -1 || negativeNumberPointer === -1) {
    //     for (let i = 0; i<arr.length; i++) {
    //         squaredArray.push(Math.pow(arr[i], 2));
    //     }
    // } else {
        while (nonNegativeNumberPointer !== arr.length || negativeNumberPointer !== -1) {
            const nonNegativeNumberSquare = Math.pow(arr[nonNegativeNumberPointer], 2);
            const negativeNumberSquare = Math.pow(arr[negativeNumberPointer], 2);
            if (negativeNumberSquare > nonNegativeNumberSquare || negativeNumberPointer === -1) {
                squaredArray.push(nonNegativeNumberSquare);
                nonNegativeNumberPointer++;
            } else {
                squaredArray.push(negativeNumberSquare);
                negativeNumberPointer--;
            }
        }
    // }
    return squaredArray;
}

function bestSquaredSortedArray(arr) {
    let squareArr = [];
    let negativePointer = 0, positivePointer = squareArrPointer = arr.length - 1;
    while (squareArrPointer > -1) {
        const negativeNumberSquare = Math.pow(arr[negativePointer], 2);
        const positiveNumberSquare = Math.pow(arr[positivePointer], 2);
        if (negativeNumberSquare > positiveNumberSquare) {
            squareArr[squareArrPointer] = negativeNumberSquare;
            negativePointer++;
        } else {
            squareArr[squareArrPointer] = positiveNumberSquare;
            positivePointer--;
        }
        squareArrPointer--;
    }
    return squareArr;
}
console.log(bestSquaredSortedArray([-2, -1, 0, 2, 3])); // [0, 1, 4, 4, 9]
console.log(bestSquaredSortedArray([0, 2, 3])); // [0, 4, 9]
console.log(bestSquaredSortedArray([-3, -2, -1])); // [1, 4, 9]

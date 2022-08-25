// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.
// my solution
function duplicateRemovedSquaredSortedArray(arr) {
    let squareArr = [];
    let negativePointer = 0, positivePointer = arr.length - 1;
    while (negativePointer <= positivePointer) {
        const absNegative = Math.abs(arr[negativePointer]);
        const absPositive = Math.abs(arr[positivePointer]);
        let newSquareNumber;
        if (absNegative > absPositive) {
            newSquareNumber = Math.pow(absNegative, 2);
            negativePointer++;
        } else if (absPositive > absNegative) {
            newSquareNumber = Math.pow(absPositive, 2);
            positivePointer--;
        } else if (absPositive === absNegative) {
            newSquareNumber = Math.pow(absNegative, 2);
            negativePointer++;
            positivePointer--;
        }
        if (Math.pow(absPositive, 2) !== squareArr[0]) {
            squareArr.unshift(newSquareNumber);
        }
    }
    return squareArr;
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
console.log(duplicateRemovedSquaredSortedArray([-2, -1, 0, 1, 2, 3])); // [0, 1, 4, 4, 9]
console.log(duplicateRemovedSquaredSortedArray([-2, 0, 2, 2, 3])); // [0, 4, 9]
console.log(duplicateRemovedSquaredSortedArray([-3, -2, -1])); // [1, 4, 9]

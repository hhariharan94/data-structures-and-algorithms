function tripletWithSmallerSum(arr, targetSum) {
    let tripletLessThanTargetCounter = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        let leftPointer = i + 1, rightPointer = arr.length - 1;
        while (leftPointer < rightPointer) {
            const currentSum = arr[i] + arr[leftPointer] + arr[rightPointer];
            if (arr[leftPointer] + arr[rightPointer] + arr[i] < targetSum) {
                tripletLessThanTargetCounter += rightPointer - leftPointer;
                leftPointer++;
            } else {
                rightPointer--;
            }
        }
    }
    return tripletLessThanTargetCounter;
}

const arr = [-1, 0, 2, 3], target = 3;
console.log(tripletWithSmallerSum(arr, target));
console.log(tripletWithSmallerSum([-1, 1, 2, 3, 4], 5));
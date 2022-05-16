/* Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.*/
function findTargetSumPairs(sortedArr, targetSum) {
    let minPointer = 0, maxPointer = sortedArr.length - 1;
    while (minPointer < maxPointer) {
        let currentSum = sortedArr[minPointer] + sortedArr[maxPointer];
        if (currentSum > targetSum) {
            maxPointer--;
        } else if (currentSum < targetSum) {
            minPointer++;
        } else {
            return [minPointer, maxPointer];
        }
    }
}
console.log(findTargetSumPairs([2, 5, 9, 11], 11));
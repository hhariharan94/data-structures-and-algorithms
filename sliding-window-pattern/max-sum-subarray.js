/* Given an array of positive numbers and a positive number ‘k,’
find the maximum sum of any contiguous subarray of size ‘k’. */

function maxSumSubarray(numList, windowLength) {
    let maxSum = 0;
    let windowSum = 0;
    for (let i=0; i < numList.length; i++) {
        windowSum += numList[i];
        if (i >= windowLength) {
            windowSum -= numList[i - windowLength];
        }
        if (maxSum < windowSum) {
            maxSum = windowSum;
        }
    }
    return maxSum;
}
const numberArray = [2, 4, 66, 1, 95, 19, 25];
const subarrayLength = 3;
console.log(maxSumSubarray(numberArray, subarrayLength));
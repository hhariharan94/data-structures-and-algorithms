// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
// Input: [2, 1, 5, 8, 2], S=7
// Output: 2
function smallestSubsetWithSum(list, sum) {
    let windowSum = 0, windowStart = 0, smallestSubsetWithSumLength = Infinity, smallestSubsetStart, smallestSubsetEnd;
    for (let windowEnd = 0; windowEnd < list.length; windowEnd++) {
        windowSum += list[windowEnd];
        while (windowSum >= sum) {
            smallestSubsetWithSumLength = windowEnd - windowStart + 1;
            windowSum = windowSum - list[windowStart];
            windowStart = windowStart + 1;
        }
    }
    smallestSubsetWithSumLength === Infinity ? console.log(0) : console.log(smallestSubsetWithSumLength);
}
smallestSubsetWithSum([2, 1, 5, 8, 2], 7);

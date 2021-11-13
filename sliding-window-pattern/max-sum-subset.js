// Given an array of positive numbers and a positive number ‘subsetLength,’ find the maximum sum of any contiguous subarray of size ‘subsetLength’.
// Input: [2, 1, 5, 1, 3, 2], subsetLength = 3 
// Output: 9
function maxSumSubset(list, subsetLength) {
    let maxSum = 0, windowSum = 0;
    for (let i = 0; i < list.length; i++) {
        windowSum += list[i];
        console.log(windowSum)
        if (i >= subsetLength - 1) {
            if (windowSum > maxSum) {
                maxSum = windowSum;
            }
            windowSum -= list[i - subsetLength + 1];
        }
    }
    console.log('MAX SUM::', maxSum);
}
maxSumSubset([2, 1, 5, 1, 3, 2], 3);
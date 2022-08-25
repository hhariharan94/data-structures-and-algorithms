/* Given an array with positive numbers and a positive target number,
find all of its contiguous subarrays whose product is less than the target number.
Input: [2, 5, 3, 40], target=40 
Output: [2], [5], [2, 5], [3], [5, 3], [10]
Explanation: There are six contiguous subarrays whose product is less than the target.
*/
function findLessProductSubarr(arr, productTarget) {
    let windowStart = 0, windowProduct = 1, resultSubArrayList = [];
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowProduct *= arr[windowEnd];
        if (windowProduct < productTarget) {
        }
        while (windowProduct > productTarget) {
            const iteratorArr = [];
            for (let i = windowStart; i < windowEnd; i++) {
                iteratorArr.push(arr[i]);
                resultSubArrayList.push([...iteratorArr]);
            }
            windowStart++;
        }
    }
}
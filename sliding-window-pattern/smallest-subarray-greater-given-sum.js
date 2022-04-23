/* Given an array of positive numbers and a positive number ‘S,’
find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’.
Return 0 if no such subarray exists. */
function smallestListWithGivenSum(numList, targetSumValue) {
    let windowArray = [], windowLength = 0, minWindowLength = Infinity;
    let windowSum = 0;
    for (let i = 0; i < numList.length; i++) {
        windowArray.push(numList[i]);
        windowSum += numList[i];
        windowLength++;
        while (windowSum >= targetSumValue && minWindowLength >= windowLength) {
            minWindowLength = windowLength;
            windowSum -= numList[i - windowLength + 1];
            windowLength--;

        }
    }
    return minWindowLength;
}

const numberArray = [2, 1, 5, 2, 3, 2], S = 7;
console.log(smallestListWithGivenSum(numberArray, S));
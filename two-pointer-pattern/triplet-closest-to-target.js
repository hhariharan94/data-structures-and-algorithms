// Given an array of unsorted numbers and a target number,
// find a triplet in the array whose sum is as close to the target number as possible,
// return the sum of the triplet.
// If there are more than one such triplet, return the sum of the triplet with the smallest sum.
function tripletCloseToTargetSum(arr, targetSum) {
    let tripletCloseToTargetArray = null;
    const sortedArr = arr.sort(function(a,b){return a - b});
    for (let i=0; i<arr.length; i++) {
        tripletCloseToTargetArray = searchPair(sortedArr, targetSum, i, tripletCloseToTargetArray);
    }
    return tripletCloseToTargetArray;
}

function searchPair(sortedArr, targetSum, currentElementIndex, tripletCloseToTargetArray) {
    const currentTargetSum = targetSum - sortedArr[currentElementIndex];
    let left = currentElementIndex + 1, right = sortedArr.length - 1;
    while (left < right) {
        const differentialSum = currentTargetSum - sortedArr[left] - sortedArr[right];
        if (!tripletCloseToTargetArray || Math.abs(tripletCloseToTargetArray.differentialSum) > Math.abs(differentialSum)) {
            tripletCloseToTargetArray = {
                differentialSum: differentialSum,
                elements: [sortedArr[currentElementIndex], sortedArr[left], sortedArr[right]]
            };
        }
        if (currentTargetSum > sortedArr[left] + sortedArr[right]) {
            left = left + 1;
        } else if (currentTargetSum < sortedArr[left] + sortedArr[right]) {
            right = right - 1;
        }
    }
    return tripletCloseToTargetArray;
}
console.log(tripletCloseToTargetSum([-2, 0, 1, 2], 2));
console.log(tripletCloseToTargetSum([-3, -1, 1, 2], 1));
console.log(tripletCloseToTargetSum([1, 0, 1, 1], 100));
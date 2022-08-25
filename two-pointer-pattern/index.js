let arr = [-3, -1, 1, 2];
let targetSum = 1;
let leftPointer = 0, rightPointer = arr.length - 1;
const sumMapper = {};
const resultSet = [];
let overallClosestSum = Infinity;
let overallClosestSumTriplet = [];
for (let i = 0; i < arr.length - 2; i++) {
    const remainingSum = targetSum - arr[i];
    const closestTripletDetails = findClosestSumPair(arr, i + 1, remainingSum);
    closestTripletDetails.closestSum = closestTripletDetails.closestSum + arr[i];
    const currentTriplet = [arr[i]].concat(closestTripletDetails.closestPair);
    const currentDiff = targetSum - closestTripletDetails.closestSum;
    const overallClosestSumDiff = targetSum - overallClosestSum;
    console.log(currentTriplet, currentDiff, overallClosestSumDiff)
    if (Math.abs(overallClosestSumDiff) === Math.abs(currentDiff)) {
        if (overallClosestSum === closestTripletDetails.closestSum) {
            overallClosestSumTriplet = overallClosestSumTriplet.push(currentTriplet);
        } else if (overallClosestSum > closestTripletDetails.closestSum) {
            overallClosestSumTriplet = currentTriplet;
        }
    } else if (Math.abs(overallClosestSumDiff) > Math.abs(currentDiff)) {
        overallClosestSum = closestTripletDetails.closestSum;
        overallClosestSumTriplet = currentTriplet;
    }
}
console.log(overallClosestSumTriplet);

function findClosestSumPair(arr, leftPointer, targetSum) {
    let rightPointer = arr.length - 1;
    let closestSum = Infinity;
    let closestPair = [];
    while (leftPointer < rightPointer) {
        const currentSum = arr[leftPointer] + arr[rightPointer];
        if (Math.abs(targetSum - currentSum) < Math.abs(targetSum - closestSum) ) {
            closestSum = currentSum;
            closestPair = [arr[leftPointer], arr[rightPointer]];
        }
        if (currentSum > targetSum) {
            rightPointer--;
        } else if (currentSum < targetSum) {
            leftPointer++;
        } else {
            break;
        }
    }
    return { closestSum, closestPair };
}
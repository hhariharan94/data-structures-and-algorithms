// const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2], k=-1;
// let highestAverage = -Infinity;
// let highestAverageStartingIndex = -1;
// let counter = 0;
// for (let i=0; i < (arr.length - k + 1); i++) {
//     let total = 0;
//     for (let j=0; j < k; j++) {
        
//         total = total + arr[i + j];
//     }
//     let average = total/k;
//     if (highestAverage < average) {
//         highestAverage = average;
//         highestAverageStartingIndex = i;
//     }
// }

// console.log(highestAverageStartingIndex,);

const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2], k = 5;
let windowStart = 0, windowSum = 0;
let highestWindowSum = -Infinity;
for (let i=0; i < arr.length; i++) {
    windowSum =  windowSum + arr[i];
    if (i >= (k - 1)) {
        if (highestWindowSum < windowSum) {
            highestWindowSum = windowSum;
        }
        windowSum = windowSum - arr[i - k + 1];
    }
}
console.log(highestWindowSum/k);
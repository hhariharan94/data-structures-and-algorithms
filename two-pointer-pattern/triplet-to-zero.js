let arr = [-9, -6, -5, -4, -2, -1, 0, 1, 2, 3, 4, 5, 6, 9];
let leftPointer = 0, rightPointer = arr.length - 1;
const sumMapper = {};
const resultSet = [];
for (let i = 0; i < arr.length - 2; i++) {
    let leftPointer = i + 1, rightPointer = arr.length - 1;
    while (leftPointer < rightPointer) {
        const pointerSum = arr[leftPointer] + arr[rightPointer];
        if (pointerSum + arr[i] === 0) {
            resultSet.push([arr[i], arr[leftPointer], arr[rightPointer]]);
            leftPointer++;
            rightPointer--;
        } else if (pointerSum + arr[i] > 0) {
            rightPointer--;
        } else {
            leftPointer++;
        }
    }
}
console.log(resultSet);
// while (leftPointer < rightPointer) {
//     if (arr[leftPointer] === arr[leftPointer - 1]) {
//         leftPointer++;
//     } else if (arr[rightPointer] === arr[rightPointer + 1]) {
//         rightPointer--;
//     } else {
//         if (sumMapper[arr[leftPointer]]) {
//             sumMapper[arr[leftPointer]].forEach((sumElemArray => {
//                 if (sumElemArray.length == 2) {
//                     sumElemArray.push(arr[leftPointer]);
//                     resultSet.push(sumElemArray);
//                 }
                
//             }));
//         } else if (sumMapper[arr[rightPointer]]) {
//             sumMapper[arr[rightPointer]].forEach((sumElemArray => {
//                 if (sumElemArray.length == 2) {
//                     sumElemArray.push(arr[rightPointer]);
//                     resultSet.push(sumElemArray);
//                 }
//             }));
//         }
//         const remainingSum = -(arr[leftPointer] + arr[rightPointer]);
//         if (sumMapper[remainingSum]) {
//             sumMapper[remainingSum].push([arr[leftPointer], arr[rightPointer]]);
//         } else {
//             sumMapper[remainingSum] = [[arr[leftPointer], arr[rightPointer]]];
//         }
//         console.log('Iteration', arr[leftPointer], arr[rightPointer], sumMapper, resultSet);
    
//         if (Math.abs(arr[leftPointer]) > Math.abs(arr[rightPointer])) {
//             leftPointer++;
//         } else {
//             rightPointer--;
//         }
//     }
// }

// console.log(resultSet);
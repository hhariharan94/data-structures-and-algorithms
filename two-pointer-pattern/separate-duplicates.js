// Given an array of sorted numbers, separate all duplicates from it in-place.
// You should not use any extra space; move all duplicates at the end of the array and after moving return the length of the subarray that has no duplicate in it.

function separateDuplicates(sortedArr) {
    let nextNonDuplicate = 0, iterator = 1;
    while (iterator < sortedArr.length) {
        if (sortedArr[nextNonDuplicate] !== sortedArr[iterator]) {
            nextNonDuplicate++;
            sortedArr[nextNonDuplicate] = sortedArr[iterator];
        }
        iterator++;
    }
    return sortedArr;
}
console.log(separateDuplicates([2, 2, 2, 3, 3, 3, 6, 9, 9]));
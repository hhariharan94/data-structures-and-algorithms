/* Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s,
 find the length of the longest contiguous subarray having all 1s.*/
function longestOneCharSubstrLengthAfterReplacement(charArray, replacementLimit) {
    let windowCharArray = [];
    let windowOneCount = 0, longestOneCharArrayLength = 0;
    charArray.forEach(charIterator => {
        windowCharArray.push(charIterator);
        (charIterator === 1) && windowOneCount++;
        if (windowCharArray.length > windowOneCount + replacementLimit) {
            const removedChar = windowCharArray.splice(0, 1);
            (removedChar[0] === 1) && windowOneCount--;
        }
        if (longestOneCharArrayLength < windowCharArray.length) {
            longestOneCharArrayLength = windowCharArray.length
        }
    });
    return longestOneCharArrayLength;
}
console.log(longestOneCharSubstrLengthAfterReplacement([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
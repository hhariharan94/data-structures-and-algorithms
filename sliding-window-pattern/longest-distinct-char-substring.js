// Given a string, find the length of the longest substring, which has all distinct characters.
// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring with distinct characters is "abc".
function longestDistinctCharSubstr(str) {
    const strArray = str.split('');
    const windowStrArray = [];
    let longestSubstrsArray = [];
    strArray.forEach((charIterator, charIteratorIndex) => {
        // const alreadyExistingIndex = ;
        while (windowStrArray.indexOf(charIterator) !== -1) {
            windowStrArray.splice(0, 1);
        }
        windowStrArray.push(charIterator);
        if (!longestSubstrsArray || !longestSubstrsArray.length || (windowStrArray.length > longestSubstrsArray[0].length)) {
            longestSubstrsArray = [[...windowStrArray]];
        } else if (longestSubstrsArray.length && windowStrArray.length === longestSubstrsArray[0].length) {
            longestSubstrsArray.push([...windowStrArray]);
        }
    });
    longestSubstrsArray = longestSubstrsArray.map(longestStringArray => longestStringArray.join(''));
    return longestSubstrsArray;
}

console.log(longestDistinctCharSubstr('aabccbb'));
console.log(longestDistinctCharSubstr('abbbb'));
console.log(longestDistinctCharSubstr('abccde'));
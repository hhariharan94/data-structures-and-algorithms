/* Given a string and a pattern, find out if the string contains any permutation of the pattern.*/
function isPermutationSubstring(mainString, permutationString) {
    let windowStringArray = [];
    let mainStringArray = mainString.split(''); 
    let permutationStringArray = permutationString.split('');
    let patternCharFrequencyMap = {};
    let hasPermutationMatch = false;
    permutationStringArray.forEach(charIterator => {
        patternCharFrequencyMap[charIterator] = patternCharFrequencyMap[charIterator] ? patternCharFrequencyMap[charIterator] + 1 : 1;
    });
    let modifiedPatternCharFrequencyMap = {...patternCharFrequencyMap};
    mainStringArray.forEach(iterator => {
        const isPresentInPermutation = modifiedPatternCharFrequencyMap[iterator];
        if (!isPresentInPermutation) {
            windowStringArray = [];
            modifiedPatternCharFrequencyMap = {...patternCharFrequencyMap};
        } else if (isPresentInPermutation) {
            windowStringArray.push(iterator);
            modifiedPatternCharFrequencyMap[iterator]--;
        }
        if (windowStringArray.length === permutationStringArray.length) {
            hasPermutationMatch = true;
        }
    });
    return hasPermutationMatch;
}
console.log(isPermutationSubstring('oidbcaf', 'abc'));
console.log(isPermutationSubstring('odicf', 'dc'));
console.log(isPermutationSubstring('bcdxabcdy', 'bcdyabcdx'));
console.log(isPermutationSubstring('aaacb', 'abc'));

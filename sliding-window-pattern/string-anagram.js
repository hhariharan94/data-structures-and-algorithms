/* Given a string and a pattern, find all anagrams of the pattern in the given string.

Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while finding permutations of a string, we get N!
N!
 permutations (or anagrams) of a string having N
N
 characters. For example, here are the six anagrams of the string “abc”:

abc
acb
bac
bca
cab
cba
Write a function to return a list of starting indices of the anagrams of the pattern in the given string.*/

function findAnagrams(str, pattern) {
    let patternCharFrequency = {}; 
    let anagramStrings = [];
    for (let i = 0; i < pattern.length; i++) {
        patternCharFrequency[pattern[i]] = !patternCharFrequency[pattern[i]] ? 1 : patternCharFrequency[pattern[i]] + 1;
    }
    let windowStart = 0, matchedChars = 0;
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        if (!isNaN(patternCharFrequency[str[windowEnd]])) {
            patternCharFrequency[str[windowEnd]]--;
            if (patternCharFrequency[str[windowEnd]] >= 0) {
                matchedChars++;
            }
        }
        console.log(str[windowEnd], patternCharFrequency, matchedChars);

        if (matchedChars === pattern.length) {
            anagramStrings.push(str.substring(windowStart, windowEnd + 1));
        }
        if (windowEnd >= pattern.length - 1) {
            if (!isNaN(patternCharFrequency[str[windowStart]])) {
                patternCharFrequency[str[windowStart]]++;
                if (patternCharFrequency[str[windowStart]] > 0) {
                    matchedChars--;
                }
            }
            windowStart++;
        }
    }
    return anagramStrings;
}
console.log(findAnagrams('abbcabc', 'abc'));
console.log(findAnagrams('ppqp', 'pq'));
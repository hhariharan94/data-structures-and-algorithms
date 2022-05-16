/* Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter,
find the length of the longest substring having the same letters after replacement. */
// Input: String="aabccbb", k=2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".
function longestSameCharString(inputStr, replaceableCharLimit) {
    const inputStrArray = inputStr.split('');
    let windowStrArray = [];
    let windowCharCountMap = {};
    let mostRepeatedCharInWindow = {
        charArray: [],
        count: 0
    };
    let longestSubstrArrayCount = 0;
    inputStrArray.forEach(iterator => {
        windowStrArray.push(iterator);
        if (windowCharCountMap[iterator]) {
            windowCharCountMap[iterator]++;
        } else {
            windowCharCountMap[iterator] = 1;
        }
        compareMostRepeatedWithCurrentIterator(mostRepeatedCharInWindow, iterator, windowCharCountMap[iterator]);
        // mostRepeatedCharInWindow = findMostRepeatedCharInWindow(windowCharCountMap);
        while (mostRepeatedCharInWindow.count + replaceableCharLimit < windowStrArray.length) {
            const removedChar = windowStrArray.splice(0, 1);
            windowCharCountMap[removedChar]--;
            if (mostRepeatedCharInWindow.charArray.indexOf(iterator) !== -1) {
                mostRepeatedCharInWindow = findMostRepeatedCharInWindow(windowCharCountMap);
            }
        }
        if (longestSubstrArrayCount < windowStrArray.length) {
            longestSubstrArrayCount = windowStrArray.length;
        }
    });
    return longestSubstrArrayCount;
}

function findMostRepeatedCharInWindow(windowCharCountMap) {
    const mostRepeatedCharInWindow = {
        charArray: [],
        count: 0
    };
    for (let i = 0; i < Object.keys(windowCharCountMap).length; i++) {
        const iterator = Object.keys(windowCharCountMap)[i];
        compareMostRepeatedWithCurrentIterator(mostRepeatedCharInWindow, iterator, windowCharCountMap[iterator]);
    }
    return mostRepeatedCharInWindow;
}

function compareMostRepeatedWithCurrentIterator(mostRepeatedCharInWindow, iterator, iteratorWindowRepeatCount) {
    if (mostRepeatedCharInWindow.count < iteratorWindowRepeatCount) {
        mostRepeatedCharInWindow.count = iteratorWindowRepeatCount;
        mostRepeatedCharInWindow.charArray = [iterator];
    } else if (mostRepeatedCharInWindow.count === iteratorWindowRepeatCount) {
        mostRepeatedCharInWindow.charArray.push(iterator);
    }
}

console.log(longestSameCharString('aabccbb', 2));
console.log(longestSameCharString('abbcb', 1));
console.log(longestSameCharString('abccde', 1));
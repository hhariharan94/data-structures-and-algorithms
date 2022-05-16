/* Given a string, find the length of the longest substring in it with no more than K distinct characters. */
function longestSubstring(text, targetCharCount) {
    let windowCharCount = 0, windowText = '', longestText = '';
    for (let i = 0; i < text.length; i++) {
        if (windowText.indexOf(text[i]) === -1) {
            windowCharCount++;
        }
        windowText = windowText + text[i];
        while (windowCharCount > targetCharCount) {
            console.log(windowText);
            const slicedChar = windowText[0];
            windowText = windowText.slice(1);
            if (windowText.indexOf(slicedChar) === -1) {
                windowCharCount--;
            }
        }
        if (windowText.length > longestText.length) {
            longestText = windowText;
        }
    }
    return longestText.length;
}
const inputText = 'cbbebi', targetCharCount = 2;
console.log(longestSubstring(inputText, targetCharCount));
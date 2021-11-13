// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
// Sample Input - [2, 3, 4, 5, 6], k = 3
// Output - [3, 4, 5]
// Best Complexity - O(n)

function averageOfSublist(list, subsetLength) {
        const averageOfSubsets = [];
  let iterationCounter = 0;
  
          let windowSum = 0;
        for (let windowEnd = 0; windowEnd < list.length; windowEnd++) {
        console.log('Without Inner Iteration::', ++iterationCounter);
      
            windowSum += list[windowEnd];
              if (subsetLength > 0 && windowEnd >= subsetLength - 1) {
          console.log(windowSum, subsetLength);
                averageOfSubsets.push(windowSum/subsetLength);
            windowSum -= list[windowEnd - subsetLength];
          
        }
    }
          console.log(averageOfSubsets);

}
const list = [1, 2, 3, 4, 5, 6];
const subsetLength = 3;
averageOfSublist(list, subsetLength); // [2, 3, 4, 5]
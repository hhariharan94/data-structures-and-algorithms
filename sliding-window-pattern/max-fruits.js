/* You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
You can start with any tree, but you can’t skip a tree once you have started.
You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both baskets. */

function maxFruitsInBasket(treeList, basketCount) {
    // const basket1 = {
    //     fruitCount: 0,
    //     treeName: ''
    // };
    // const basket2 = {
    //     fruitCount: 0,
    //     treeName: ''
    // };
    let windowFruitsList = [], windowTreeCount = 0, maxFruitCount = 0;
    for (let treeIterator = 0; treeIterator < treeList.length; treeIterator++) {
        if (windowFruitsList.indexOf(treeList[treeIterator]) === -1) {
            windowTreeCount++;
        }
        windowFruitsList.push(treeList[treeIterator]);
        while (windowTreeCount > basketCount) {
            const splicedTree = windowFruitsList.splice(0, 1);
            if (splicedTree.indexOf(treeList[treeIterator]) === -1) {
                windowTreeCount--;
            }
        }
        if (windowFruitsList.length > maxFruitCount) {
            maxFruitCount = windowFruitsList.length;
        }
    }
    return  maxFruitCount;
}
// const treeList = ['A', 'B', 'C', 'B', 'B', 'C'], maxBaskets = 2;
const treeList = ['A', 'B', 'C', 'A', 'C'], maxBaskets = 2;
console.log(maxFruitsInBasket(treeList, maxBaskets));
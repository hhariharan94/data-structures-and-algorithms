// Given the head of a Singly LinkedList,
// write a function to determine if the LinkedList has a cycle in it or not.

function Node(value, next = null) {
    this.value = value;
    this.next = next;
}

const headNode = new Node(1);
headNode.next = new Node(2);
headNode.next.next = new Node(3);
headNode.next.next.next = new Node(4);
headNode.next.next.next.next = new Node(5);
headNode.next.next.next.next.next = new Node(6);


// Brute force method
function hasLinkedListCycle(headNode) {
    let iteratorNode = headNode;
    let foundCycle = false;
    while (iteratorNode.next !== null) {
        if (iteratorNode.hasAlreadyBeenAccessed) {
            foundCycle = true;
            break;
        } else {
            iteratorNode.hasAlreadyBeenAccessed = true;
            iteratorNode = iteratorNode.next;
        }
    }
    return foundCycle;
}
// console.log(hasLinkedListCycle(headNode));

// Floyd's Cycle Finding Algorithm uses two pointers
// one pointer moves by one step and the other pointer moves by two steps 
function hasLinkedListCycleFloydAlgorithm(head) {
    let slowPointer = head;
    let fastPointer = head;
    let hasLinkedListCycle = false;
    while (fastPointer !== null && fastPointer.next !== null) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
        if (fastPointer === slowPointer) {
            hasLinkedListCycle = true;
            break;
        }
    }
    return hasLinkedListCycle;
    // do {
    //     if (fastPointer && fastPointer.next) {
    //         fastPointer = fastPointer.next.next;
    //     } else {
    //         fastPointer = null;
    //         break;
    //     }
    //     slowPointer = slowPointer.next;
    // } while (fastPointer !== slowPointer)
    // if (fastPointer === slowPointer) {
    //     return true;
    // } else {
    //     return false;
    // }
}
console.log(hasLinkedListCycleFloydAlgorithm(headNode));

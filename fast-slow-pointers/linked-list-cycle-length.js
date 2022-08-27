class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const headNode = new Node(1);
headNode.next = new Node(2);
headNode.next.next = new Node(3);
headNode.next.next.next = new Node(4);
headNode.next.next.next.next = new Node(5, headNode.next);
// headNode.next.next.next.next.next = new Node(6, headNode.next.next);

function findLinkedListCycleNodeLength(head) {
    let slowPointer = fastPointer = head;
    let loopLength = 0;
    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if (fastPointer === slowPointer) {
            loopLength = calculateCycleLength(slowPointer);
            break;
        }
    }
    return loopLength;
}
function calculateCycleLength(slowPointer) {
    let current = slowPointer.next;
    let loopLength = 1;
    while (current !== slowPointer) {
        loopLength++;
        current = current.next;
    }
    return loopLength;
}
console.log(findLinkedListCycleNodeLength(headNode));
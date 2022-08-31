// Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

// If the total number of nodes in the LinkedList is even, return the second middle node.

class Node {
    value;
    next;
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

let headerNode = new Node(1);
headerNode.next = new Node(2);
headerNode.next.next = new Node(3);
headerNode.next.next.next = new Node(4);
headerNode.next.next.next.next = new Node(5);
headerNode.next.next.next.next.next = new Node(6);
headerNode.next.next.next.next.next.next = new Node(7);

function findLinkedListMiddle(headerNode) {
    let slowPointer = headerNode, fastPointer = headerNode;
    while (fastPointer !== null && fastPointer.next !== null) {
        if (fastPointer.next.next !== null) {
            slowPointer = slowPointer.next;
        }
        fastPointer = fastPointer.next.next;
    }
    return slowPointer.value;
}
 console.log(findLinkedListMiddle(headerNode));
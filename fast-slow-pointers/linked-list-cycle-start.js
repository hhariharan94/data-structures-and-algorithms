// Given the head of a Singly LinkedList that contains a cycle,
// write a function to find the starting node of the cycle.
// l1 - from starting of the list to the starting of the cycle
// l2 - from starting of the cycle to the point where both the pointers intersect
// C - is the length of the cycle
// i - number of loops through the cycle by the slow pointer
// j - number of loops through the cycle by the fast pointer
// n is the number of nodes traversed by the slow pointer, then fast pointer would traverse 2n nodes at the same time
// n = l1 + l2 + C*i =====> 2n = 2l1 + 2l2 + C*2i
// 2n = l1 + l2 + C*j
// from the above 2 equations l1 + l2 = C(j-2i)
// thus l1 + l2 is a multiple of C, so if we start a pointer from l2 distance in the cycle and start another
// pointer from the starting point of the list at the same time and move them together by a single step in
// each iteration. When both the pointers meet together both would have travelled l1 iterations as pointer 2
// is already staring l2 ahead in the cycle and adding an l1 should result in C because l1 + l2 is a multiple of C

const { cycle } = require("collections/iterator");

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
headNode.next.next.next.next = new Node(5);
headNode.next.next.next.next.next = new Node(6);

findLinkedListStart(headNode);

function findLinkedListStart(headNode) {
    
    let slow = findLinkedListCycleMeetingPoint(headNode);
    let startListPointer = headNode, startMeetingPointPointer = slow;
    if (slow) {
        while (true) {
            startMeetingPointPointer = startMeetingPointPointer.next;
            startListPointer = startListPointer.next;
            if (startListPointer === startMeetingPointPointer) {
                console.log(startListPointer);
                break;
            }
        }
    } else {
        console.log('No Cycle detected in the linked list.');
    }
}

function findLinkedListCycleMeetingPoint(headNode) {
    let slow = headNode;
    let fast = headNode;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            return slow;
        }
    }
    return null;
}

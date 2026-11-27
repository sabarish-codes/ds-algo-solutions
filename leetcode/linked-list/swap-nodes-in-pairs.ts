import { ListNode } from './list-node';

function swapPairs(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;
    const dummyHead = new ListNode(-1, head);
    let anchor = dummyHead;
    while(anchor.next && anchor.next.next){
        const first = anchor.next;
        const second = anchor.next.next;
        first.next = second.next;
        second.next = first;
        anchor.next = second;
        anchor = first;
    }
    return dummyHead.next;
};

/*
time - O(n)
space - O(1)
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0,head)
    let slow = dummy;
    let fast= dummy;
    for(let i=0;i<n;i++){
         fast = fast.next
    }
    while(fast.next!=null){
        slow= slow.next;
        fast = fast.next;
    }
    // slow.next = slow.next.next;
    slow.next = slow.next.next;
    return dummy.next;

//the above code is also right and below code is also right. you can use both
    // let dummy = new ListNode(0,head)
    // let left = dummy;
    // let right = head;
    // while(n>0&&right!==null){
    //     right = right.next;
    //     n--;
    // }
    // while(right!==null){
    //     left = left.next;
    //     right= right.next;
    // }
    // left.next= left.next.next;
    // return dummy.next;
};
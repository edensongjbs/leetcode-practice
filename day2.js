// Majestic Linked-List Solution:

var mergeTwoLists = function(l1, l2) {
    let l3head, l3tail
    if (!l1){return l2}
    if (!l2){return l1}
    l3tail= l1.val <= l2.val ? l1 : l2
    l3head=l3tail
    if (l1.val <= l2.val) {
        l1=l1.next
    } 
    else {
        l2=l2.next
    }
    l3tail.next=null
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            l3tail.next=l1
            l3tail=l3tail.next
            l1=l1.next
        } 
        else {
            l3tail.next=l2
            l3tail=l3tail.next
            l2=l2.next
        }
        l3tail.next=null
    }
    if (!l1){l3tail.next=l2}
    else if (!l2){l3tail.next=l1}
    return l3head
};
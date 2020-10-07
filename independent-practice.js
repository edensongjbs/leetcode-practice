var addTwoNumbers = function(l1, l2) {
    let carryOver, currentColumn, firstNode, currentNode, nextNode
    currentNode = {val:null, next:null}
    firstNode = currentNode
    while ((l1 && l1.next) || (l2 && l2.next)) {
        nextNode = {val:null, next:null}
        if (!l1){l1={val:0, next:null}}
        if (!l2){l2={val:0, next:null}}
        currentColumn = l1.val+l2.val
        if (carryOver) {currentColumn+=carryOver}
        if (currentColumn >= 10) {
            carryOver = Math.floor(currentColumn/10)
            currentColumn = currentColumn%10
        }
        else {
            carryOver = 0
        }
        currentNode.val = currentColumn
        currentNode.next = nextNode
        currentNode = currentNode.next
        l1=l1.next
        l2=l2.next
    }
    nextNode = {val:null, next:null}
    if (!l1){l1={val:0, next:null}}
    if (!l2){l2={val:0, next:null}}
    currentColumn = l1.val+l2.val
    if (carryOver) {currentColumn+=carryOver}
    if (currentColumn >= 10) {
        carryOver = Math.floor(currentColumn/10)
        currentColumn = currentColumn%10
    }
    else {
        carryOver = 0
    }
    currentNode.val = currentColumn
    currentNode.next = carryOver>0 ? {val:carryOver, next:null} : null
    return firstNode
};
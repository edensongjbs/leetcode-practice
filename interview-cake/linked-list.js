function deleteNode(nodeToDelete) {

    // Delete the input node from the linked list
    // let node = nodeToDelete
    // while (node.next) {
    //   node.value=node.next.value
    //   node=node.next
    // }
    if (nodeToDelete.next) {
      nodeToDelete.value=nodeToDelete.next.value
      nodeToDelete.next=nodeToDelete.next.next
    }
    else {
      throw new Error
    }
  
  }

  function containsCycle(firstNode) {

    // Check if the linked list contains a cycle
    if (!firstNode){return false}
    slow = firstNode, fast = firstNode
    if (!fast.next){return false}
    while (fast.next.next) {
      fast=fast.next.next
      slow=slow.next
      if (fast===slow){return true}
    }
    return false;
  }
  
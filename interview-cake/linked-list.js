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
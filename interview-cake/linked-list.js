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
  
  function reverse(headOfList) {

    // Reverse the linked list in place
    if (!headOfList){return null}
    if (!headOfList.next){return headOfList}
    let reversedList = headOfList
    let currentNode = headOfList.next
    reversedList.next=null
    while (currentNode.next) {
      nextNode = currentNode.next
      currentNode.next=reversedList
      reversedList=currentNode
      
      currentNode= nextNode
    }
    currentNode.next=reversedList
    return currentNode
  }
  
  function kthToLastNode(k, head) {
    let ct=1
      
    if (k < 1) {throw new Error}
    if (!head){throw new Error}
    let node=head
    while (node.next) {
      ct++
      node=node.next
    }
    ct-=(k-1)
    if (ct < 1){throw new Error} 
    // Return the kth to last node in the linked list
    node = head
    while (ct > 1){
      node=node.next
      ct--
    }
    
    return node;
  }
  
  /* inputs: a int value and a list head node
  outputs: return a node (kth from end)
  
  
  example:2,  'Angel Food'-'Bundt'-'Cheese'-"Devil's Food"-'Eccles'
  exp: Devil's Food
  
  
  constraints:
  
  edge cases: empty list, k < 0, k larger than length of list
  
  time complexity: O(n)
  
  
  */
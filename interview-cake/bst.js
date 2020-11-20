class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insertLeft(value) {
      this.left = new BinaryTreeNode(value);
      return this.left;
    }
  
    insertRight(value) {
      this.right = new BinaryTreeNode(value);
      return this.right;
    }
}

const isSuperBalanced = (root) => {
    let theNode = root
    visitedNodes = []
    leafDepths = []
    root.depth = 0
    while (theNode.left || theNode.right || visitedNodes.length > 0) {
        if (!theNode.left && !theNode.right) {
            leafDepths.push(theNode.depth)
        }
        if (theNode.right) {
            theNode.right.depth = theNode.depth+1
            visitedNodes.push(theNode.right)
        }
        if (theNode.left) {
            theNode.left.depth = theNode.depth+1
            visitedNodes.push(theNode.left)
        }
        if (visitedNodes.length > 0) {
            theNode = visitedNodes.pop()
        }
    }
    console.log(leafDepths)
    if (leafDepths.length = 0) {return true}
    const max = Math.max(...leafDepths)
    const min = Math.min(...leafDepths)
    console.log(min, max)
    return (max-min <= 1)
}

module.exports = { isSuperBalanced, BinaryTreeNode }
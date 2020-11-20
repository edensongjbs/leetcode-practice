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
    // console.log(leafDepths)
    // if (leafDepths.length = 0) {return true}
    leafDepths.push(theNode.depth)
    const max = Math.max(...leafDepths)
    const min = Math.min(...leafDepths)
    console.log(min, max)
    return (max-min <= 1)
}

// InterviewCake Solution - Short Circuits if more than 2 depths are found
// function isBalanced(treeRoot) {

//     // A tree with no nodes is superbalanced, since there are no leaves!
//     if (!treeRoot) {
//       return true;
//     }
  
//     const depths = []; // We short-circuit as soon as we find more than 2
  
//     // Nodes will store pairs of a node and the node's depth
//     const nodes = [];
//     nodes.push([treeRoot, 0]);
  
//     while (nodes.length) {
  
//       // Pop a node and its depth from the top of our stack
//       const nodePair = nodes.pop();
//       const node = nodePair[0];
//       const depth = nodePair[1];
  
//       if (!node.left && !node.right) {
  
//         // Сase: we found a leaf
//         // We only care if it's a new depth
//         if (depths.indexOf(depth) < 0) {
//           depths.push(depth);
  
//           // Two ways we might now have an unbalanced tree:
//           //   1) More than 2 different leaf depths
//           //   2) 2 leaf depths that are more than 1 apart
//           if (
//             (depths.length > 2)
//             || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
//           ) {
//             return false;
//           }
//         }
//       } else {
  
//         // Case: this isn't a leaf - keep stepping down
//         if (node.left) {
//           nodes.push([node.left, depth + 1]);
//         }
//         if (node.right) {
//           nodes.push([node.right, depth + 1]);
//         }
//       }
//     }
  
//     return true;
//   }

const isBST = (root, lower, upper) => {
    upper = upper ? upper : Number.POSITIVE_INFINITY
    lower = lower ? lower : Number.NEGATIVE_INFINITY
    
    if (!root) {return true}
    if (root.value < lower || root.value > upper) {return false}
    if (!root.left && !root.right) {return true}
    if (root.left && root.right) {
        return isBST(root.left, lower, root.value) && 
        isBST(root.right, root.value, upper)
    }
    if (root.left) {
        return isBST(root.left, lower, root.value)
    }
    if (root.right) {
        return isBST(root.right, root.value, upper)
    }
}

const largest = (root) => {
    while (root.right) {
        root = root.right
    }
    return root.value
}

const secondLargest = (root, pred=null) => {
    console.log(root, pred)
    if (root.right){
        return secondLargest(root.right, root)
    }
    else if (root.left){
        return largest(root.left)             
    }
    else {
        return pred.value
    }
}

// Interview Cake Iterative Solution
// function isBinarySearchTree(treeRoot) {

//     // Start at the root, with an arbitrarily low lower bound
//     // and an arbitrarily high upper bound
//     const nodeAndBoundsStack = [];
//     nodeAndBoundsStack.push({
//       node: treeRoot,
//       lowerBound: Number.NEGATIVE_INFINITY,
//       upperBound: Number.POSITIVE_INFINITY,
//     });
  
//     // Depth-first traversal
//     while (nodeAndBoundsStack.length) {
//       const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();
  
//       // If this node is invalid, we return false right away
//       if (node.value <= lowerBound || node.value >= upperBound) {
//         return false;
//       }
  
//       if (node.left) {
  
//         // This node must be less than the current node
//         nodeAndBoundsStack.push({
//           node: node.left,
//           lowerBound,
//           upperBound: node.value,
//         });
//       }
  
//       if (node.right) {
  
//         // This node must be greater than the current node
//         nodeAndBoundsStack.push({
//           node: node.right,
//           lowerBound: node.value,
//           upperBound,
//         });
//       }
//     }
  
//     // If none of the nodes were invalid, return true
//     // (At this point we have checked all nodes)
//     return true;
//   }

module.exports = { isSuperBalanced, isBST, secondLargest, BinaryTreeNode }


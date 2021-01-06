/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function advanceCurrentNode(level, output) {
    let currentNode = output[level]
    if (level===0) return null
    if (currentNode.left===output[level+1]) return advanceCurrentNode(level-1, output)
    // check to see if level is less output.length-1?  Also if it is, make sure currentNode.left!=output[level+1]
    if (currentNode.left) {
        rightSideView(currentNode.left, output, output.length)
    }
    else {
        return advanceCurrentNode(level-1, output)
    }
}

var rightSideView = function(root, output=[], currentLev=0) {
    let currentNode=root
    while (currentNode.right || currentNode.left) {
        if (currentLev <= output.length) output.push(currentNode)
        if (currentNode.right) {
            currentNode=currentNode.right
        }
        else {
            currentNode=currentNode.left
        }
        currentLev++
    }
    let currentNode=advanceCurrentNode(output.length-2, output)
    if (currentNode) {
        rightSideView(currentNode, output)
    }
    else return output.map(node => node.val)
};
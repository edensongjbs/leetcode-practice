const { test, expect } = require('@jest/globals')
// const { reverseStringInPlace } = require('./interview-cake')
const { isSuperBalanced, isBST, BinaryTreeNode } = require('./bst')

describe('isSuperBalance', () => {
    let tree1 = new BinaryTreeNode(5)
    tree1.insertLeft(1)
    tree1.insertRight(2)
    tree1.left.insertLeft(3)
    tree1.left.insertRight(8)

    let tree2 = new BinaryTreeNode(4)

    let tree3 = new BinaryTreeNode(5)
    tree3.insertLeft(1)
    tree3.insertRight(2)

    // Bad Case
    // let tree4 = new BinaryTreeNode(5)
    // tree4.insertLeft(1)
    // tree4.left.insertLeft(3)


    let tree5 = new BinaryTreeNode(5)
    tree5.insertLeft(1)
    tree5.insertRight(2)
    tree5.right.insertRight(13)
    tree5.right.right.insertRight(8)

    

    test('Returns true when Tree is SuperBalanced', () => {
        expect(isSuperBalanced(tree1)).toBe(true)
        expect(isSuperBalanced(tree2)).toBe(true)
        expect(isSuperBalanced(tree3)).toBe(true)
    })

    test('Returns false when Tree is SuperBalanced', () => {
        // expect(isSuperBalanced(tree4)).toBe(false)
        expect(isSuperBalanced(tree5)).toBe(false)
    })
})

describe('isBST', () => {
    let tree1 = new BinaryTreeNode(5)
    
    let tree2 = null
    
    let tree3 = new BinaryTreeNode(5)
    tree3.insertLeft(3)
    tree3.left.insertLeft(1)
    tree3.left.insertRight(4)
    tree3.insertRight(6)

    let tree4 = new BinaryTreeNode(6)
    tree4.insertLeft(3)
    tree4.left.insertLeft(1)
    tree4.left.insertRight(4)
    tree4.insertRight(5)

    let tree5 = new BinaryTreeNode(2)
    tree5.insertRight(1)

    let tree6 = new BinaryTreeNode(2)
    tree6.insertLeft(1)

    let gotchaTree = new BinaryTreeNode(50)
    gotchaTree.insertLeft(30)
    gotchaTree.left.insertLeft(20)
    gotchaTree.left.insertRight(60)
    gotchaTree.insertRight(80)
    gotchaTree.right.insertLeft(70)
    gotchaTree.right.insertRight(90)

    test('Returns true when Tree is a valid BST', () => {
        expect(isBST(tree1)).toBe(true)
        expect(isBST(tree2)).toBe(true)
        expect(isBST(tree3)).toBe(true)
        expect(isBST(tree6)).toBe(true)
    })

    test('Returns false when Tree is not a valid BST', () => {
        expect(isBST(tree4)).toBe(false)
        expect(isBST(tree5)).toBe(false)
        expect(isBST(gotchaTree)).toBe(false)
    })

})
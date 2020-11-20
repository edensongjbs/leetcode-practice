const { test, expect } = require('@jest/globals')
// const { reverseStringInPlace } = require('./interview-cake')
const { isSuperBalanced, BinaryTreeNode } = require('./bst')

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
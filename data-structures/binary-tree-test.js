const tree = require('./binary-tree')
const BinaryTree = tree.BinaryTree
const Node = tree.Node

const Tree = new BinaryTree()
Tree.insert(50)
Tree.insert(49)
Tree.insert(51)
console.log(Tree)

const TreeNode = require('../../utils/tree');

const json = {
  val: 6,
  children: [
    { val: 2, children: [
      { val: 0, children: [] },
      { val: 4, children: [
        { val: 3, children: [] },
        { val: 5, children: [] },
      ] },
    ]},
    { val: 8, children: [
      { val: 7, children: [] },
      { val: 9 , children: [] },
    ]},
  ]
};

const tree = new TreeNode(json);

const p1 = tree.findParent1(5, 0);
const p2 = tree.findParent1(3, 2);
const p3 = tree.findParent1(2, 8);
const p4 = tree.findParent1(7, 9);
const p5 = tree.findParent1(7, 3);

console.log('parent :>> ', p1.val, p2.val, p3.val, p4.val, p5.val);
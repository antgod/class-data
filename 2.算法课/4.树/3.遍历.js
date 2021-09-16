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



tree.map(item => console.log(item.val))
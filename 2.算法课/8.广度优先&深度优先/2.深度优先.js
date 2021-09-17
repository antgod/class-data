
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

// 深度优先 deep frist search
const dfs = (treeNode, callback) => {
  Object.keys(treeNode).forEach(key => {
    const child = treeNode[key];
    if (typeof child === 'object') {
      dfs(child, callback);
    }
    callback(child);
  })
}

dfs(json, item => {
  if (item.val !== undefined) {
    console.log(item.val)
  }
})
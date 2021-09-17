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

// 广度优先 breath frist search
const bfs = (treeNode, callback) => {
  const childs = [];
  Object.keys(treeNode).forEach(key => {
    const child = treeNode[key];
    callback(child);
    if (typeof child === 'object') {
      childs.push(child);
    }
  })

  childs.forEach(child => {
    bfs(child, callback);
  })
}

bfs(json, item => {
  if (item.val !== undefined) {
    console.log(item.val)
  }
})
const log = (json, tab = 2) => {
  const result = typeof json === 'object' ? JSON.stringify(json , null, tab) : json
  return console.log(result)
}

// function findGtHalfItem (array) {
//   const memory = {}
//   for (const item of array) {
//     memory[item] ? memory[item]++ : memory[item] = 1
//     if (memory[item] > array.length / 2) {
//       return item
//     }
//   }
//   return 0
// }

// log(findGtHalfItem([1, 2, 3, 3, 4, 3, 3, 4, 2, 1, 3, 3, 3]))

// function findBox (n) {
//   if (n <= 2) {
//     return n
//   }
//   return findBox(n - 1) + findBox(n - 2)
// }

// function findCountInString (s, t) {
//   let i = 0, len = s.length, count = 0
//   for (;i < len; i++) {
//     const char = s[i]
//     if (char === t[0] && s.substr(i, t.length) === t) {
//       count++
//       i = i + t.length
//     }
//   }
//   return count
// }

// log(findCountInString('xxabcyy,nnabcmmmkabcll', 'abc'))

// function analyzeTree (flattenTree) {
//   const jsonTree = flattenTree.reduce((tree, leaf) => {
//     !leaf.parentId && Object.assign(tree, {root: leaf })
//     return Object.assign(tree, {[leaf.id]: leaf })
//   }, {})

//   const rootId = jsonTree.root && jsonTree.root.id || 0

//   const assembleTree = (id , jsonTree) => {
//     const leaf = jsonTree[id]
//     const parents = flattenTree.filter(leaf => leaf.parentId === id)
//     return {
//       id,
//       name: leaf.name,
//       children: parents.map((parent) => assembleTree(parent.id, jsonTree))
//     }
//   }

//   return assembleTree(rootId, jsonTree)
// }

// log(analyzeTree([
//   {id: 1, name: 'i1'},
//   {id: 2, name: 'i2', parentId: 1},
//   {id: 4, name: 'i4', parentId: 3},
//   {id: 3, name: 'i3', parentId: 2},
//   {id: 8, name: 'i8', parentId: 7}
// ]))

// const log = (json, tab = 2) => {
//   const result = typeof json === 'object' ? JSON.stringify(json , null, tab) : json
//   return console.log(result)
// }

const flatterTree = (tree, paths = [] , json) => {
  for (const key in tree) {
    const leaf = tree[key]
    const path = paths.concat(key)
    if (typeof leaf === 'object') {
      flatterTree(leaf, path, json)
    } else {
      json[path.join('.')] = leaf
    }
  }
  return json
}

log(flatterTree({ n: {
    k: 1,
    y: 2,
    d: {
      a: 1,
      b: 2
    }
  },
b: 3}, [], {}))

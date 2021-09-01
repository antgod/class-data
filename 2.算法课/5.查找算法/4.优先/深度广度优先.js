const bfs = (tree, callback) => {
  const values = Object.keys(tree).map(key => {
    const value = tree[key]
    callback(value, key)
    return value
  })

  values.forEach(value => {
    if (typeof value === 'object') {
      bfs(value, callback)
    }
  })
}

const dfs = (tree, callback) => {
  Object.keys(tree).forEach(key => {
    const value = tree[key]
    callback(value, key)
    if (typeof value === 'object') {
      bfs(value, callback)
    }
  })
}

const tree = {
  a: {
    a1: {
      
    },
    a2: 1,
  },
  b: {
    b1: true,
    b2: {
      b3: 'string'
    }
  }
}
console.log('======深度优先======')

dfs(tree, console.log)

console.log('======广度优先======')

bfs(tree, console.log)

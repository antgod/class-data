// [[1,2],[3,4]] => [1,2,3,4]

const flattenOnce = (arr) => {
  return [].concat(...arr)
}

// [[1,2],3,[[[4], 5]]] => [1,2,3,4,5]
const flatten = (arr) => {
  return [].concat(...arr.map(item => Array.isArray(item) ? flatten(item) : item))
}

console.log(flattenOnce([[1,2],[3,4]]))

console.log(flatten([[1,2],3,[[[[4, [5]], 6], 7]]]))

const curry = func => {
  // console.log(func.length)
  const g = (...allArgs) => {
    return allArgs.length >= func.length ? func(...allArgs) : (...args) => g(...allArgs, ...args)
  }
  return g
}

const foo = curry((a,b,c,d) => {
  console.log(a,b,c,d)
})

foo(1)(2)(3)(4)

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
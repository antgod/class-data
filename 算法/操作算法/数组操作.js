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
  const g = (...allArgs) => {
    return allArgs.length >= func.length ? func(...allArgs) : (...args) => g(...allArgs, ...args)
  }
  return g
}

const foo = curry((a,b,c,d) => {
  console.log(a,b,c,d)
})

foo(1)(2)(3)(4)

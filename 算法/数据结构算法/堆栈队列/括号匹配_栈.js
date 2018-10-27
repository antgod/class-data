// 给定一个括号表达式，只有[]和()，判断表达式括号是否平衡，比如[(())]返回true,[()(()])不平衡
const Stack = require('../../../数据结构/stack')
const { keys, values } = Object

const pattern = {
  ')': '(',
  ']': '[',
  '}': '{',
}

const patterns = keys(pattern).concat(values(pattern))

const isValid = (str) => {
  const stack = new Stack()
  for(const char of str) {
    if (!patterns.includes(char)) {
      continue
    } else if (!pattern[char]) {
      stack.push(char)
    } else if (!stack.head || stack.pop().data !== pattern[char] ) {
      return false
    }
  }
  return !!stack.isEmpty()
}

const str = '{([33z]ff)q[(1)]}'
console.log('isValid(str) :', isValid(str));
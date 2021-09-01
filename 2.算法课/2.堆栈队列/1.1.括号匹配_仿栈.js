// 1. 给定一个括号表达式，只有[]和()，判断表达式括号是否平衡，比如[(())]返回true,[()(()])不平衡
const signs = {'[': ']', ']': '[', '(': ')', ')': '(' }
const keys = Object.keys

function nagate (cur) {
  return signs[cur]
}

function parse (str) {
  const stack = []
  let i = 0, cur
  while(cur = str.charAt(i)) {
    if (stack[stack.length - 1] === nagate(cur)) {
      stack.pop()
    } else if (keys(signs).includes(cur)) {
      stack.push(cur)
    }
    i++
  }
  return !stack.length
}

console.log('[(a(1,2,4)3)]', parse('[(a(1,2,4)3)]'))
console.log('[(a(1,2,4)3)](', parse('[(a(1,2,4)3)]('))

/*
 * 将给定的字符串前n位移动到末尾
 * 如：'abcefg' // => 'efgabc'
 * */


const string = 'abcefg' // => 'efgabc'

const trans1 = (str, n) => [str.substr(0, n), str.substr(n, str.length -1)].reverse().join('')

console.log(trans1(string, 3))

// 如果没有高级函数，只用线性表实现
// 先分成abc,efg两部分，分别反转cba,gfe
// 在整体反转形成efgabc
// 先来写个反转函数
const reverse = (chars, from, to) => {
  while (from < to) {
    var t = chars[from]
    chars[from ++] = chars[to]
    chars[to--] = t
  }
  return chars
}

const trans2 = (s, n, m) => {
  reverse(s, 0, m - 1)
  reverse(s, m, n - 1)
  reverse(s, 0, n - 1)
}
const s = string.split('')
trans2(s, s.length, 3)
console.log(s.join(''))

// 输入一个英文句子：如'I am a student.' => 'student. a am I'，标点符号同样处理

const trans3 = (sentence) => {
  const s = sentence.split(' ')
  return reverse(s, 0, s.length - 1)
}

console.log(trans3('I am a student.').join(' '))

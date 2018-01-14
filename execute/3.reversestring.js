/*
 * ���������ַ���ǰnλ�ƶ���ĩβ
 * �磺'abcefg' // => 'efgabc'
 * */


const string = 'abcefg' // => 'efgabc'

const trans1 = (str, n) => [str.substr(0, n), str.substr(n, str.length -1)].reverse().join('')

console.log(trans1(string, 3))

// ���û�и߼�������ֻ�����Ա�ʵ��
// �ȷֳ�abc,efg�����֣��ֱ�תcba,gfe
// �����巴ת�γ�efgabc
// ����д����ת����
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

// ����һ��Ӣ�ľ��ӣ���'I am a student.' => 'student. a am I'��������ͬ������

const trans3 = (sentence) => {
  const s = sentence.split(' ')
  return reverse(s, 0, s.length - 1)
}

console.log(trans3('I am a student.').join(' '))

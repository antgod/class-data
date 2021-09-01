// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2

const numbers = [2, 7, 11, 15]

// 正常思路
const common = target => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers[i], numbers[j]]
      }
    }
  }
  return []
}

console.log(common(26))

// 双指针

const twoPoints = target => {
  for (let i = 0, j = numbers.length - 1; i < j;) {
    const result = numbers[i] + numbers[j]
    if (result < target) {
      i++
    } else if (result > target) {
      j--
    } else {
      return [numbers[i], numbers[j]]
    }
  }
  return []
}

console.log(twoPoints(26))

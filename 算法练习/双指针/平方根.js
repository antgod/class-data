// Input: 5
// Output: True
// Explanation: 1 * 1 + 2 * 2 = 5

const numbers = [2, 7, 11, 15]


// 双指针
const twoPoints = target => {
  for (let i = 0, j =  Math.floor(Math.sqrt(target)); i <= j; ) {
    const result = i * i + j * j 
    if (result < target) {
      i++
    } else if (result > target) {
      j--
    } else {
      return [i, j]
    }
  }
  return []
}

console.log(twoPoints(27))
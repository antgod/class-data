// 斐波那契数列: 1, 1, 2, 3, 5, 8, 13, 21...
var i = 0
const fibonacci = (n) => {
  i++
  if (n === 1 || n === 0) {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}
// 时间复杂度: 1, 1, 3, 5, 9, 15, 25, 41...
// 时间复杂度：指数集-2^n
console.log('fibonacci', fibonacci(7), i)
i = 0

// 指数级：1, 2, 4, 8, 16, 32, 64, 128...
const exponent = (n) => {
  i++
  if(n === 0) {
    return 1
  }
  return 2 * exponent(n - 1)
}

// 时间复杂度：1, 2, 3, 4, 5, 6...
// 时间复杂度：线性-n
console.log('exponent', exponent(3), i)
i = 0 

// 时间复杂度：1, 2, 3, 4, 5, 6...
// 阶乘：1, 1, 2, 6, 24, 120, 720...
const factorial = (n) => {
  i++
  if(n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}

// 时间复杂度：线性-n
console.log('factorial', factorial(1), i)
i = 0


// 阶乘复杂度：1, 1, 2, 6, 48, 2800...
const factorial2 = (n) => {
  i++
  if(n === 0) {
    return 1
  }
  var result = 1
  for(var j = n - 1; j >= 0; j --) {
    result = result * factorial2(j)
  }
  return n * result
}

// 结果
// fn(4) -> 4 * fn(3) * fn(2) * fn(1) * fn(0) = 48
// fn(3) -> 3 * fn(2) * fn(1) * fn(0) = 6
// fn(2) -> fn(1) * fn(0) = 2
// fn(2) -> fn(1) * fn(0) = 2
// fn(1) -> fn(0) = 1
// fn(1) -> fn(0) = 1
// fn(1) -> fn(0) = 1
// fn(1) -> fn(0) = 1
// fn(0) = 1
// fn(0) = 1
// fn(0) = 1
// fn(0) = 1
// fn(0) = 1
// fn(0) = 1
// fn(0) = 1
// fn(0) = 1

// 时间复杂度： 1, 2, 4, 8, 16, 32, 64...
// 时间复杂度： 2^n
console.log('result', factorial2(4), i)
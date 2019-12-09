
// 数组里的任意三元素之合等于result
const arr = [2, 7 ,11, 15, -1, -4, 0, 2]
const result = 18

// 方法1：暴力穷举：时间复杂度: O(n3)
// 方法2：a, b双层循环，result - (a + b) = c，判断c在不在Set内，时间复杂度：O(n2)，空间复杂度O(n)
// 方法3：对数组排序，排序后循环a，然后b取剩下的第一位，c取最后一位。时间复杂度：O(n2)，空间复杂度O(1)
// 如果a + b + c > result ，c左移一位
// 如果a + b + c < result ，b右移一位
// 如果a + b + c 找到中间都没有找到，重新右移一位

// 方法3
const compute = (arr, result) => {
	arr.sort(function(a, b){return a - b})
	let b, c
	const a = arr.find((a, i) => {
		const rest = arr.slice(i)
		let ib = 0
		let ic = rest.length - 1

		debugger
		while(a + rest[ib] + rest[ic] !== result && ib < ic) {
			if(a + rest[ib] + rest[ic] > result) ic--
			if(a + rest[ib] + rest[ic] < result) ib++
		}

		if (a + rest[ib] + rest[ic] === result) {
			b = rest[ib]
			c = rest[ic]
			return true
		}
	})
	return [a, b, c]
}

console.log(compute(arr, 28))
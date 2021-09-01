
// 数组里的任意两元素之合等于result
const arr = [2, 7 ,11, 15]
const result = 18

const compute = (arr, result) => {
	const set = new Set(arr)
	const item = arr.find((item)=> set.has(result - item))
	return item ? [arr.indexOf(item), arr.indexOf(result - item)] : []
}

console.log(compute(arr, result))
/*
 * 由于内存大小有限，队列里只能存储10条历史数据。
 * 每当有n条新数据进来时，如何做才能保持队列永远是最新的100条数据？
 * */

// 比较通用的做法是：需要更新队列，把之前队列数据整体向前移动n条，来保证队列永远是最新的100条数据
// 但是这种做法性能非常低下，每个数据往前移动了一次,而移动队列的时间复杂度为O(n)。所以，总体的时间复杂度为O(n方)
// 而这里给出的答案，是使用环形队列，每当n条数据插入时，更新队列的前n条数据，然后移动内存指针，指向第n条数据，当队列读取完毕，从队列的头开始继续读取
// 整体时间复杂度为O(n)，以达到最优解

const range = (times) => {
  const ranges = []
  for (let idx = 0; idx < times; idx++) {
    ranges.push(idx)
  }
  return ranges
}

const random = max => Math.floor(Math.random() * max)

const randoms = (length, max) => range(length).map(() => random(max))

// 随机生成数据
const initialDS = (length, max = 100) => randoms(length, max)

const DEFAULT_MAX = 10
// 使用数据来模拟环形队列
let arr = initialDS(DEFAULT_MAX)
console.log('初始数据', arr)

// 生成新数据，截取源数据的后半部分放在前面，新数据放在后面拼接，模拟环形队列
const updateDS = (arr, length, max = 100) => arr.slice(length).concat(randoms(length, max))

// 更新内存队列
arr = updateDS(arr, 2)
console.log('更新后数据', arr)

// 更新内存队列
arr = updateDS(arr, 2)
console.log('更新后数据', arr)

// 更新内存队列
arr = updateDS(arr, 2)
console.log('更新后数据', arr)

// 更新内存队列
arr = updateDS(arr, 2)
console.log('更新后数据', arr)

// 更新内存队列
arr = updateDS(arr, 2)
console.log('更新后数据', arr)
/* 从更新后的数据可以看出，经过5次更新数据，原始数据已经全部被替换。 */







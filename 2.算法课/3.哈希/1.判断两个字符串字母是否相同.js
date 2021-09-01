// anagram：两个字符串字母相同，个数相同，顺序不同

const arr = ['rat', 'tar']

// 方法1：排序，O(n*logn)
const isAnagram1 = (str1, str2) => {
  return str1.split('').sort().join('') === str2.split('').sort().join('')
}

console.log('rat, tar', isAnagram1(...arr))

// 方法2：map存字母个数，map操作和获取都是O(n )
const isAnagram2 = (str1, str2) => {
	const isMapEqual = (map1, map2) => {
		return Object.keys(map1).length === Object.keys(map2).length && Object.keys(map1).every(key => map1[key] === map2[key])
	}

  return isMapEqual(str1.split('').reduce((last, item) => {
		return {...last, [item]: (last[item] || 0) + 1}	
	}, {}), str2.split('').reduce((last, item) => {
		return {...last, [item]: (last[item] || 0) + 1}	
	}, {}))
}

console.log('rat, tar', isAnagram2(...arr))
const parser = (input, sep = '.') => {
  const charSep = ''
  const tokens = input.split(charSep)
  const memory = []
  let isComplex = false

  // 词法分析器的最后我们返回 tokens 数组。
  return tokens.reduce((last, char) => {
    if (char === '[') {                                         // 标记特殊路径
      isComplex = true
    } else if (char === ']') {                                  // 改回普通路径，并把特殊路径插入到tokens
      isComplex = false
      const ret = last.concat(memory.join(charSep))
      memory.length = 0
      return ret
    } else if (!isComplex && char !== sep) {                    // 如果是普通路径并且不是分隔符
      return last.concat(char)
    } else if (isComplex && !/['"]/.test(char)) {               // 如果是特殊路径
      memory.push(char)
    }
    return last
  }, [])
}

const input = `a/b["c.d"]/e['f/g.0']/x[0]`

const objInline = {
  a: {
    'b.c': [
      {
        d: 1,
      },
    ],
  },
}
// 校验
const isNull = obj => obj === undefined || obj === null

// 默认值
const setDefault = (current, defaultValue) => current || defaultValue

const get = (obj, path, defaultValue, sep) => {
  const paths = Array.isArray(path) ? path : parser(path, sep)
  console.log(paths)
  const result = paths.reduce((last, path) => last && path ? last[path] : last, setDefault(obj, {}))
  return isNull(result) ? defaultValue || result : result
}
console.log(get(objInline, "a['b.c'][0]/d", undefined, '/'))
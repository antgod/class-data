const STEP = 250

const partial = (fn, ...args) => () => fn(...args)

const debounce = (fn, delay = STEP, immediate) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    if (immediate && !timer) {
      fn(...args)
    }
    timer = setTimeout(partial(fn, ...args), delay)
  }
}

const throttle = (fn, hold = STEP) => {
  let timer
  let last
  return function (...args) {
    let now = +new Date()
    if (last && now < last + hold) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        fn(...args)
      }, hold)
    } else {
      last = now
      fn(...args)
    }
  }
}
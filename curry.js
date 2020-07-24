const curry = (fn)=> {
  return (...args)=> {
    return fn(...args)
  }
}

const squareNumber = curry((x) => (x*x))

console.log(squareNumber(4))


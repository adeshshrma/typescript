type NumAndStr = number | string

const combine = (input1: NumAndStr, input2: NumAndStr) => {
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2
  } else {
    return input1.toString() + input2.toString()
  }
}

const num = combine(22, 35)
const string = combine('anna ', 'sage')
console.log(string)
console.log(num)

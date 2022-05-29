const voidFunction = (): void => {
  console.log('void function')
}

voidFunction()

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2
  cb(result)
}

addAndHandle(43, 22, (result) => {
  console.log(result)
})

// never type function
const throwError = (msg: string, code: number): never => {
  throw { msg: msg, code: code }
}

throwError('something went wrong', 500)

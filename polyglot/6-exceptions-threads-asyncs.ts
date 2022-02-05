import assert from 'assert'

/* try-catch-finally */
let foo = 1
try {
  throw new Error('test')
} catch (e) {
  assert(e instanceof Error)
  assert(e.message === 'test')
  foo += 1
} finally {
  foo **= 2
}

assert(foo === 4)

/* async/await */
async function main (): Promise<void> {
  console.log('main:', 'start...')
  await new Promise(function (resolve) {
    setTimeout(resolve, 1000)
  })
  console.log('main:', '1 sec')
}

void main()

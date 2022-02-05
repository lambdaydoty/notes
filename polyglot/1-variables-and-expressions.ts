let g = 1

function app (): void {
  const x = 42
  let y = 41
  const z = null

  let [a, b] = [1, -1]
  ;[a, b] = [b, a]

  g += 1
  y += 1
  // x += 1

  console.log({ g, x, y, z, a, b })
  console.log(`z is null? ${z === null ? 'true' : 'false'}`)
  console.log(`x is ${(x % 2 === 0) ? 'even' : 'odd'}.`)
}

app()

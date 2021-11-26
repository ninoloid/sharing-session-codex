const bestSum = (target, numbers) => {
  if (target === 0) return []
  if (target < 0) return null
  
  let shortest = null

  for (const num of numbers) {
    if (num <= 0) break
    const remainder = target - num
    const remainderResult = bestSum(remainder, numbers)

    if (remainderResult !== null) {
      const result = [ ...remainderResult, num ]

      if (!shortest || result.length < shortest.length) {
        shortest = result
      }
    }
  }

  return shortest
}

const executionLog = (target, numbers) => {
  console.time('execution time')
  const result = bestSum(target, numbers)
  !result || result.length <= 5 ? console.log(result) : console.table(result)
  console.timeEnd('execution time')
}

executionLog(28, [1, 5, 6])
executionLog(52, [12, 4, 2, 5])
executionLog(65, [1, 5, 20])
executionLog(30, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
executionLog(300, [0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5])

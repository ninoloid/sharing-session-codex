const fib = (value, memo = {}) => {
  // Termination condition
  if (value in memo) return memo[value]
  if (value === 1) return 1 
  if (value === 0) return 0
  
  memo[value] = fib(value - 1, memo) + fib(value - 2, memo)
  return memo[value]
}

console.log('Hasil Fibonacci dari 5 adalah', fib(5))
console.log('Hasil Fibonacci dari 10 adalah', fib(10))
console.log('Hasil Fibonacci dari 15 adalah', fib(15))
console.log('Hasil Fibonacci dari 20 adalah', fib(20))
console.log('Hasil Fibonacci dari 45 adalah', fib(45))
console.log('Hasil Fibonacci dari 100 adalah', fib(100))

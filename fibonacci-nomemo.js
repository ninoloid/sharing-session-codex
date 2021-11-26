const fib = value => {
  // Termination condition
  if (value === 1) return 1
  if (value === 0) return 0
  
  return fib(value - 1) + fib(value - 2)
}

console.log('Hasil Fibonacci dari 5 adalah', fib(5))
console.log('Hasil Fibonacci dari 10 adalah', fib(10))
console.log('Hasil Fibonacci dari 15 adalah', fib(15))
console.log('Hasil Fibonacci dari 20 adalah', fib(20))
// console.log('Hasil Fibonacci dari 45 adalah', fib(45))
// console.log('Hasil Fibonacci dari 100 adalah', fib(100))

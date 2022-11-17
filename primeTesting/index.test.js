/**
 * A prime number is an integer number that cannot be divided by any number
 * except itself and 1.
 * Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

const primeTester = function(n) {
  if(n === 1 || n === 0){ return false }
  for (let num = 2; num <= Math.sqrt(n); num++) {
    if(n%num ===0){ return false }
  }
  return true
};

describe('primeTester', () => {
  it('returns true if the number is a prime', () => {
    expect(primeTester(2)).toBe(true)
    expect(primeTester(5)).toBe(true)
    expect(primeTester(19)).toBe(true)
    expect(primeTester(23)).toBe(true)
    expect(primeTester(97)).toBe(true)
  })
  it('returns false if the number is not a prime', () => {
    expect(primeTester(1)).toBe(false)
    expect(primeTester(6)).toBe(false)
    expect(primeTester(12)).toBe(false)
    expect(primeTester(100)).toBe(false)
    expect(primeTester(0)).toBe(false)
  })
})

/* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive).
 If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
*/

const PrimeNumbersRange = (left, right) =>{
  const prime = new Array(right).fill(true)
  for(let p = 2; p*p <= right ; p++){
    if(prime[p] === true){
      for(let i = p * p; i<=right; i+=p){
        prime[i] = false
      }
    }
  }
  const answer = [];
  for (let index = 0; index < prime.length; index++) {
    if(prime[index] && index >= left)
      answer.push(index)
  }

  return answer
}

describe('PrimeNumbersRange', () => {
  it('return all the prime numbers in the given range', () => {
    expect(PrimeNumbersRange(10, 25)).toStrictEqual([11,13,17,19,23])
    expect(PrimeNumbersRange(2, 100)).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
  })
})

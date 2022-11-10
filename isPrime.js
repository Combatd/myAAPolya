/*
Define a function isPrime(number) that returns true if number is prime. Otherwise, false. 
A number is prime if it is only divisible by 1 and itself.
*/

// definition of prime: a number is prime if it has only two factors, itself and 1
// goal: return a boolean of whether a given number is prime or not
// input: number (integer)
// output: true or false (boolean)
// edge cases: 0? 1? does it have to be larger than one to be prime?

// 1. Check if number is greater than 2
//  - if not, return false (edge cases - not prime)

// 2. Iterate from 2 up to number (exclusive)
//   - Check if i is a divisor of the number (use %)
//      - if it is, return false (not prime)

// 3. After loop completes, return true

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  let i = 2;
  while (i < number) {
    if (number % i === 0) {
      return false;
    }
    i++;
  }
  
  return true;
}
/*
Write a function threeIncreasing that accepts an array of numbers as an argument. 
The function should return a boolean indicating whether or not the array contains 
three consecutive numbers in consecutive increasing order, like 7, 8, 9.
*/

function threeIncreasing(numbersArray) {
  if (numbersArray.length < 3) {
    return false;
  }
  // 1. loop through array element and check the next 2 elements after it
  for (let i = 0; i < numbersArray.length - 2; i++) {
      // 2. each iteration will compare 1st num to 2nd num and 2nd num to 3rd num
      let currentNumber = numbersArray[i];
      let secondNumber = numbersArray[i + 1];
      let thirdNumber = numbersArray[i + 2];
      let threeConsecutiveNumbersFound = currentNumber + 1 === secondNumber && secondNumber + 1 === thirdNumber;
      if (threeConsecutiveNumbersFound) {
        return true;
      }
  }

  // 3. return false after we hit check 3rd to last number and haven't found anything
  return false;
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false
function sumArray(array) {
  // 1. declare a number variable to store the sum result
  let sum = 0;
  // 2. create a loop that will add the value of each element to the sum result
  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    sum += currentNumber;
  }
  // 3. return the sum result after the loop is completed
  return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
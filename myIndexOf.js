/*
Write a function myIndexOf(arr, target) that takes in an array and target value as args. 
The function should return the first index where the target is found in the array. 
If the target is not found, it should return -1. 
Solve this without using Array.indexOf.
*/

// 1. Create a for loop to iterate through the array for comparisons.
// 2. Compare the target value with each element in iterations of the loop.
// 3. If a match is found, return the location (index) of the element in the array.
// 4. If nothing is found after the for loop, return -1.

function myIndexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    if (target === currentElement) {
      return i;
    }
   }

  return -1;
}

console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1
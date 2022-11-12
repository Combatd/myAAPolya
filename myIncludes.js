/*
Write a function myIncludes(arr, target) that accepts an array and a target value as args. 
The function should return a boolean indicating whether the target is found in the array. 
Solve this without Array.includes or Array.indexOf.
*/

function myIncludes(arr, target) {
  // 1. loop through the array to make comparisons
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    // 2. return true if target value matches current element value
    if (target === currentElement) {
      return true;
    }
  }

  // 3. return false if the target does not match any elements
  return false;
}

console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false
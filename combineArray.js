// We could for loop and add each element of array2 to array1 manually
// But the Array.concat method is easier to write
// Array.concat returns a value, doesn't mutate the underlying arrays

function combineArray(array1, array2) {
  // 1. Declare a variable which has a value that is the concatenated / merging of 2 arrays
  const mergedArray = array1.concat(array2);
  // 2. return the merged array
  return mergedArray;
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]
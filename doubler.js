function doubler(numbers) {
  // We could initialize an empty array, and then set each element to be the element multiplied by 2
  // but maybe we can try a map method
  const doubledArray = numbers.map(number => number * 2);
  return doubledArray;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
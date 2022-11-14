function productWithReduce(nums) {
  // 1. Declare a product variable with the value 1 to store the result
  let product = 1; // can't start with  0 or we will get 0 every multiplication operation
  // 2. Loop through each number and set the product variable by multiplying the number
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    product = product * currentNum;
  }
  // 3. Return the product after the loop is complete
  return product;
}

console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12
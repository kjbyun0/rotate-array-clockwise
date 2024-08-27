function rotateArray(arr, k) {
  // type your code here
  const shifts = k % arr.length;
  return arr.slice(arr.length - shifts).concat(arr.slice(0, arr.length - shifts));
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));

  console.log("");
  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 1));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution

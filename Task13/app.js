let arrays = [
  [1, 2, 5, 8, 9, 4, 6, 7],
  [5, 8, 9, 6, 74, 11, 52, 89, 36, 8, 99],
  [92, 70, 49, 96, 56, 31, 66, 36, 84, 64],
  [101, 112, 149, 79, 121, 54, 89, 95, 119, 122],
  [268, 265, 134, 262, 234, 129, 200, 144, 236, 174],
];
for (let i = 0; i < arrays.length; i++) {
  arr = arrays[i];
  //Max number
  function max() {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
        num = arr[i];
      }
    }
    console.log("Maximum number:-", num);
  }
  // sum of all element
  const sum = () => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    console.log("Sum of all elements: -", total);
  };

  //odd number count
  const count = function () {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        count++;
      }
    }
    console.log("Count of odd numbers: -", count);
  };

  //call
  console.log("Array : -", arr);
  max();
  sum();
  count();
  console.log("\n \n");
}

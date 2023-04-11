function findSecondMax(arr) {
    let max1 = -Infinity; // Initialize max1 to smallest possible value
    let max2 = -Infinity; // Initialize max2 to smallest possible value
  
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
  
      if (num > max1) {
        // If num is greater than max1, update max2 to be max1 and update max1 to be num
        max2 = max1;
        max1 = num;
      } else if (num > max2 && num < max1) {
        // If num is greater than max2 but less than max1, update max2 to be num
        max2 = num;
      }
    }
  
    return max2;
  }
  
  const arr = [9, 5, 1, 8, 11, 16, 7, 10, 2, 3, 11, 100, 109];
  const secondMax = findSecondMax(arr);
  console.log("Second Maximum Number: ", secondMax);
  
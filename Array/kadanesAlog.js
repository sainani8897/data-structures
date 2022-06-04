

arr = [5, -4, -2, 6, -1];

// find the maximum sum  of arr

//Kadaina's algorithm

function kadanes(arr) {
  let currSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currSum = currSum + arr[i];

    if (currSum > maxSum) {
      maxSum = currSum;
    }

    if (currSum < 0) {
      currSum = 0;
    }
  }

  return maxSum;
}

console.log(kadanes(arr));

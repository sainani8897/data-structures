function twoSumNonSub(arr, sum) {
  let n = arr.length;
  let m = new Map();

  let currSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currSum = sum - arr[i];
    if (m.has(currSum)) {
      // console.log(m.get(currSum),i);
      return [m.get(currSum), i];
    } else m.set(arr[i], i);
  }
}

function twoSumSubArr(arr, sum) {
  let n = arr.length;
  let m = new Map();
  let start = 0;
  let end = -1;
  let currSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];

    if (currSum - sum == 0) {
      start = 0;
      end = i;
      break;
    }

    if (m.has(currSum - sum)) {
      console.log(currSum - sum);
    //   return [m.get(currSum), i];
      start = m.get(currSum - sum) + 1;
      end = i;
      break;
    }
    m.set(currSum, i);
  }

  if (end == -1) {
    return [-1, -1];
  } else return [start, end];
}

console.log(twoSumNonSub([10, 15, -5, 15, -10, 5], 5));
console.log(twoSumSubArr([10, 15, -5, 15, -10, 5], 5));

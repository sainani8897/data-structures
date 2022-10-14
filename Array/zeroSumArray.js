/* 
Given an integer array, check if it contains a contiguous subarray having zero-sum.

Input : [3, 4, -7, 3, 1, 3, 1, -4, -2, -2]
Output: True
Explanation: The subarrays with zero-sum are

[3, 4, -7]
[4, -7, 3]
[-7, 3, 1, 3]
[3, 1, -4]
[3, 1, 3, 1, -4, -2, -2]
[3, 4, -7, 3, 1, 3, 1, -4, -2, -2]

Input : [4, -7, 1, -2, -1]
Output: False
Explanation: The subarray with zero-sum doesn't exist.
 */

/* Sol Hint: using as we need to use hash set */

/** Approach
 *  y = x + 0;
 *  if we say that the sum of the subarray starting from the 0th index till the 3rd index is x and the sum of the subarray from 0th index to 7th index is also x, 
 * Ex 
*/

/* Ex
    3, 4, -7, 3, 1, 3, 1, -4, -2, -2
    ---


*/

function zeroSumProblem(arr) {
    // create an empty map
    let map = {};
  
    // create an empty vector of pairs to store
    // subarray starting and ending index
    let out = [];
  
    // Maintains sum of elements so far
    let sum = 0;

    let n = arr.length;
  
    for (var i = 0; i < n; i++)
    {
        // add current element to sum
        sum += arr[i];
  
        // if sum is 0, we found a subarray starting
        // from index 0 and ending at index i
        if (sum == 0)
            out.push([0, i]);
  
        // If sum already exists in the map there exists
        // at-least one subarray ending at index i with
        // 0 sum
        if (map.hasOwnProperty(sum))
        {
            // map[sum] stores starting index of all subarrays
            let vc = map[sum];
            for (let it of vc)
                out.push([it + 1, i]);
        }
        else
            map[sum] = [];
  
        // Important - no else
        map[sum].push(i);
    }
  
    // return output vector
    return out;
}

function print(arr) {
    const vecs = zeroSumProblem(arr);
    if (vecs.length<=0) {
        console.log(false);
    }
    vecs.map(item => {
        console.log(arr.slice(item[0],(item[1]+1)));
    });
}
print([4, -7, 1, -2, -1]);

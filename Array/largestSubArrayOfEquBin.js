/* Given a binary array containing 0’s and 1’s, find the largest contiguous subarray with equal numbers of 0’s and 1’s.

Input : [0, 0, 1, 0, 1, 0, 0]
Output: [0, 1, 0, 1] or [1, 0, 1, 0]

Input : [0, 0, 0, 0]
Output: []

Note: Since an input can contain several largest subarrays with equal numbers of 0’s and 1’s, the code should return any one of them.
 */

/* Solution Use the Hash Map 
   1. we will asume the 0 as -1 and add the cummulitaive sum 
   2. we store in hash_map and if we get the value which is already seen than it is considered as equal number of the binaray values
   3.with the max_length and ending_index we can get the starting index and return the largest array.
*/

function findLargestSubarray(arr) {

    let sum = 0;
    let map = new Map();

    // Initialize result
    let max_len = 0;
    let ending_index = -1;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        
        sum += (arr[i] === 0 ? -1 : 1)

        if (sum == 0)
        {
            max_len = i + 1;
            ending_index = i;
        }
    
        if(map.has(sum)){
            if (max_len < i - map.get(sum))
            {
                max_len = i - map.get(sum);
                ending_index = i;
            }
        }
        else 
            map.set(sum,i);
    }
    return arr.slice((ending_index - max_len),ending_index)
}

console.log(findLargestSubarray([0, 0, 1, 0, 1, 0, 0]))




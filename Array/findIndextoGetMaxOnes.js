/* Given a binary array, find the index of 0 to be replaced with 1 to get the maximum length sequence of continuous ones. The solution should return the index of first occurence of 0, when multiple continuous sequence of maximum length is possible.

Input : [0, 0, 1, 0, 1, 1, 1, 0, 1, 1]
Output: 7
Explanation: Replace index 7 to get the continuous sequence of length 6 containing all 1’s.

Input : [0, 1, 1, 0, 0]
Output: 0
Explanation: Replace index 0 or 3 to get the continuous sequence of length 3 containing all 1’s. The solution should return the first occurence.

Input : [1, 1]
Output: -1
Explanation: Invalid Input (all 1’s)

** Solution **:
Refernce Geeks for Geeks link: https://www.geeksforgeeks.org/find-index-0-replaced-1-get-longest-continuous-sequence-1s-binary-array/

*/

function findIndexofZero(arr) {
    let max_length = 0;
    let currIndex = 0
    // for maximum number of 1 around a zero
    let max_count = 0;   
    // for storing result
    let max_index = 0;
    let prevIndex = -1
    let prePrevIndex = -1;
    let n = arr.length;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            // console.log(arr[i])
            if (i - prePrevIndex > max_count) {
                max_count = i - prePrevIndex;
                max_index = prevIndex
            }
            prePrevIndex = prevIndex;
            prevIndex = i;
        }

        if(n - prePrevIndex > max_count){
            max_index = prevIndex
            // console.log(max_index);
        }

    }
    return max_index;

}


console.log(findIndexofZero([1, 1]));
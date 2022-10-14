
/* 
Given a binary array, in-place sort it in linear time and constant space. The output should contain all zeroes, followed by all ones.

Input : [1, 0, 1, 0, 1, 0, 0, 1]
Output: [0, 0, 0, 0, 1, 1, 1, 1]

Input : [1, 1]
Output: [1, 1]

*/

function swap(arr,i,j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    return arr;
}

function sortBinaryArray(a, n) {
    let j = -1;
    for (let i = 0; i < n; i++) {

        // if number is smaller than 1
        // then swap it with j-th number
        if (a[i] < 1) {
            j++;
            a = swap(a,i,j);
        }
    }
}

let a = [0,0];

let n = a.length;

sortBinaryArray(a, n);

console.log(a);

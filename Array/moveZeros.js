

function swap(A, j, i) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
    return A;
}

function moveArray(arr){    
    let n = arr.length;
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] != 0) {
            arr = swap(arr, j, i);
            j++;
        }
    }
    return arr
}

console.log(moveArray([6, 0, 8, 2, 3, 0, 4, 0, 1]));
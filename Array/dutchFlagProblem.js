/* 
Given an array containing only 0’s, 1’s, and 2’s, sort it in linear time and using constant space.

Input : [0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0]
Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2] */


/* Solution 
 1. we will have 3 pointer low,mid and high
 2. low and mid poninter will start index and high will take the end of the array
 3. if(mid == 0) will swap the low and mid pointer values and increment low and mid
 4. if(mid == 1) simply increment the mid pointer
 5. if(mid == 2) now mid and high pointer values are swapped and high pointer will be decremented


*/

function swap(arr,i,j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

function Solution(arr) {
    
    let low = 0
    let mid = 0;
    let high = arr.length-1;

    while(mid <= high) {
        if(arr[mid]==0){
            arr = swap(arr,mid,low);
            mid++;
            low++;
        }
        else if(arr[mid]==1){
            mid++;
        }
        else{
            arr = swap(arr,mid,high)
            high--;
        }

        
    }   
    return arr;

}

console.log(Solution([0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0]));





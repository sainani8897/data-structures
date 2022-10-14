//Merge Sort Alog


var arr = [4, 2, 8, 7, 2,2, 11, 1, 3];

function merge(left, right) {
    let arr = []
    // console.log(left,right);
   // console.log(left);
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift())  
        }
    }
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

function mergeSort(arr){
    let len = arr.length;
    
    if(len<2){
      //console.log(arr);   
      return arr;
    }
    
   splitSize = Math.ceil(len/2)
   left = arr.splice(0,splitSize);
   return merge(mergeSort(left),mergeSort(arr));
    
    
}

console.log(mergeSort(arr));
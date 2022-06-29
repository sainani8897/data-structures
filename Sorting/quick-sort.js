// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
console.log("*** Quick Sort ****");

arr = [12,2,4,53,33,5,1,9,24,11];

function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    
}

function partArr(arr,low,high){
    
    let pivot = arr[high];
    
    
    let i = low-1;
    
    for(let j=low;j<=high-1;j++){
        
        if(arr[j] < pivot){
            i++
            swap(arr,i,j);
        }
        
    }
    swap(arr,i+1,high)
    
    return i+1;
    
}

function quickSort(arr,low,high){
    if(low < high){
        let pi  = partArr(arr,low,high);
        console.log(pi);
        
        quickSort(arr,low,pi-1);
        quickSort(arr,pi+1,high)
    }    
    
}

console.log(arr);
quickSort(arr,0,arr.length-1)
console.log(arr)


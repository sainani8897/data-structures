let arr = [5,4,3,2,1];
function bubbleSort(arr){
    let n = arr.length;
    let swapped = false //for further optimization it swapped stays false than we will break from main loop
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j+1]<arr[j]){
                swap(arr,j+1,j)
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr;
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


console.log(bubbleSort(arr))
console.log("Insertion sort!");


let arr = [8,7,9,6,1,2,5,3]

let n =arr.length

function instertionSort(arr){
    
    for(let i = 1;i<n;i++){
        let temp = arr[i]
        let j = i-1;
        while(j>=0 && arr[j]>temp){
            arr[j+1] = arr[j];
            j--
        }
        arr[j+1] = temp
    }
    return arr;
}

console.log(instertionSort(arr))
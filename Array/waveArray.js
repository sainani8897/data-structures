
let A =  [ 6, 17, 15, 13];

console.log(waveArr(A))

function waveArr(A){
var arr = A.sort(function(a, b){return a-b});
      //console.log(arr) ;
        for(let i=1;i<arr.length;i+=2){
            
            if(arr[i]>arr[i-1]){
               arr =  swap(arr,i,i-1)
            }
            
            if(arr[i]>arr[i+1] && i<n-2){
                arr = swap(arr,i,i-1)
            }
            
        }
        
        return arr;
}


function swap(arr,x,y){
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp   
   console.log(arr)
    return arr;                           
}
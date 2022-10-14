// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let arr = [0,1,2,3,4,5,6,7,8];
let target = 1;

function binarySearch(arr,target){
    var first = 0;
    var last = arr.length - 1;
   // console.log(target)
    while (first <= last) {
        
        let midpoint = Math.floor((first+last)/2);
        if(arr[midpoint] == target) return "Success";
        else if(target > arr[midpoint] ) 
        {
            first = midpoint + 1
        }
        else{
            last = midpoint -1
        }
        
        //console.log(midpoint);
       
    }
    return "No value Matched";
    
    
}

console.log(binarySearch(arr,6));
function recursiveSearch(arr,target){
    let first = 0;
    let last = arr.length - 1;
    
    if(arr.length == 0)
        return "Not Found"
    
    let midpoint = Math.floor((first+last)/2);

    if(arr[midpoint]==target) return " Found the element ";
    else if(target > arr[midpoint]){
        // 6 > 4 
        first = midpoint + 1;
        return recursiveSearch(arr.slice(first),target);
    }
    else {
        // 2 < 4
        last = midpoint - 1;
        return recursiveSearch(arr.slice(0,last),target);
    }
    
    
}

console.log(recursiveSearch(arr,7));
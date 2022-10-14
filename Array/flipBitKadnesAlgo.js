let arr = [1, 0, 0, 1, 0];

//Kadanes principal
function flipBits(arr){
    let curSum = 0
    let maxSum = 0 
    let ones = 0
    let value = 0;
    let sum = 0;
    
    console.log(curSum);
    for(let i=0;i<arr.length;i++){
        
        if(arr[i]==1){
            ones++;
            value = -1;
        }
        else{
            value = 1
        }
        curSum = curSum + value
        
        if(curSum > maxSum)
            maxSum = curSum
        if (curSum < 0)
            curSum = 0

    }  
    
    return ones+maxSum

}

console.log(flipBits(arr));

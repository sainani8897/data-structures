// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
 let A = [-846930886, -1714636915, 424238335, -1649760492]  
 
 console.log(maxset(A));
 
function maxset(A){
        let maxSum = Number.NEGATIVE_INFINITY;
        let currSum = 0
        let left =0
        let right = 0
        let subArray =[];
        let newArr = [];
        
        for(let i = 0;i<A.length;i++){
                
            currSum += A[i];
            
            
            
            if(currSum>maxSum){
                maxSum = currSum;
                subArray = [left,right]
                if(currSum>=0){
                    newArr.push(A[i]);
                }
                right++;
            }
            else if(currSum == 0 && maxSum ==0){
                maxSum = currSum;
                subArray = [left,right]
                if(currSum>=0){
                    newArr.push(A[i]);
                }
                right++;
            }
            else{   
                
                right++
                left=right
                //right=left;
                
                
                
            }
            
            // if(currSum<0){
            //     currSum=0;
            // }
            
        }
        
        // if(newArr[0]<0)
        //     return []
        
        return newArr
        
        
	}
    
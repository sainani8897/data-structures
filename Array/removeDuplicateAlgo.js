var removeDuplicates = function(nums) {
    
   let n = nums.length; 
    
     if (n == 0 || n == 1)
            return n;
 
        // To store index of next unique element
        var j = 0;
 
        // Doing same as done in Method 1
        // Just maintaining another updated index i.e. j
        for (i = 0; i < n - 1; i++){
            
             if (nums[i] != nums[i + 1])
                nums[j++] = nums[i];
            
        }
        nums[j++] = nums[n - 1];
         return j;
  
    
};

let arr = [0,0,1,1,1,2,2,3,3,4]

removeDuplicates(arr);
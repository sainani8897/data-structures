/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // nums = nums.sort(function(a, b){return a - b});
      //nums.sort()
      let j = nums.length -1;
      let sum = 0;
      let left = 0;
      let right = nums.length-1;
    
      while(left < right){
          sum = nums[left] + nums[right]
          if(sum == target)
              return [left,right]
          else if(sum > target){
              right--
          }
          else {
              left ++
          }
      }
  
      return [-1,-1];
      
  };
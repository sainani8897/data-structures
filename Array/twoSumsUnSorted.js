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
     
      indexMap = new Map();
      
      for(let i=0;i<nums.length;i++){
          
          let difference = target -  nums[i];
          
          if(indexMap.has(difference)){
              console.log(difference)
              return [i,indexMap.get(difference)]
          }
          else{
              indexMap.set(nums[i],i);
              
          }
          
      }
    
     
      
  };
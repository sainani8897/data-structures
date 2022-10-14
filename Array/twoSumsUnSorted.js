/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {

      let j = nums.length -1;
      let sum = 0;
     
      indexMap = new Map();
      let resArr = [];
      for(let i=0;i<nums.length;i++){
          
          let difference = target -  nums[i];
          
          if(indexMap.has(difference)){
              resArr.push([nums[i],nums[indexMap.get(difference)]]);
          }
          else{
              indexMap.set(nums[i],i);
          }
          
      }
      
      return resArr;
     
      
  };

  console.log(twoSum([8, 7, 2, 5, 3, 1],10))
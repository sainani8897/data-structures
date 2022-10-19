/* Given an integer array of size `n`, return the element which appears more than `n/2` times. Assume that the input always contain the majority element.

Input : [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2]
Output: 2

Input : [1, 3, 1, 1]
Output: 1 */
function findMajorityElement(arr) { 

    const map = new Map();

    for (let i = 0; i < arr.length; i++) { 
        if(map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
        else{
            map.set(arr[i], 1);
        }
    }

    let majorityElement = 0;
    let majorityElementKey = 0
    for (let value of map.keys()){
        let curValue = map.get(value);
        if(curValue > majorityElement){
            majorityElement = curValue;
            majorityElementKey = value;
        }
    }

    return majorityElementKey


}

console.log(findMajorityElement([2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2]))
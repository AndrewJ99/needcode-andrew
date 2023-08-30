/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    const result = [];

    for(let i = 0; i < nums.length - 1; i++){ //[(3), 2, 4]
        for(let j = i+1; j < nums.length; j++){ // [3, (2), 4] - iterate through rest of array 
            if(nums[i] + nums[j] == target){
                result.push(i);
                result.push(j);
                return result;
            }
        }
    }
    return result;
};
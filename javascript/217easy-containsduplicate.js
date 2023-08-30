/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    arr = nums.sort();
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == arr[i+1]){
            return true;
            break;
        }
    }
    return false;
};
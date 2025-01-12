/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index;
    for (let i = 0; i<=nums.length; i++){
        if (nums[i] === target){
            return i;
        } else if (nums[i] > target){
            return i;
        } else if (i === nums.length) {
            return i;
        }
    }
};
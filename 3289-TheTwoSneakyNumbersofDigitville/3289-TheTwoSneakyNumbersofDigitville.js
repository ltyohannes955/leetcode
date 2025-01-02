/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            nums[i] === nums[j] ? result.push(nums[i]) : "";
        }
    }
    return result;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let ans = [];
    

    for (let i=0; i<nums.length; i++){
        let count = 0
        for(let j=0; j<nums.length; j++){
            if (nums[j]<nums[i]){
                count+=1
            }
        }
        ans.push(count)
    }
    return ans;
};
function twoSum(nums, target) {
    var first = 0;
    while (first <= nums.length) {
        for (var i = first; i < nums.length; i++) {
            first !== undefined ? 0 : first = i;
            if (nums[first] + nums[i + 1] === target)
                return [first, i + 1];
        }
        first++;
    }
    ;
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 2, 3], 6));

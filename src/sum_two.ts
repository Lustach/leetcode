function twoSum(nums: number[], target: number): [number, number] {
    let first: number = 0;
    while (first <= nums.length) {
        for (let i = first; i < nums.length; i++) {
            if (nums[first] + nums[i + 1] === target) return [first, i + 1]
        }
        first++
    };
}
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 2, 3], 6));


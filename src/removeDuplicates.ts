// function removeDuplicates(nums: number[]): number {
//     return Array.from(new Set(nums)).length
// };

// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

// removeElements === val

// function removeElement(nums: number[], val: number){
//     return nums.filter(e=>e!==val)
// };
// console.log(removeElement([3,2,2,3],3))

//plus one
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]

function plusOne(digits: number[]) {
    // const joinArray = digits.join('')
    // const getBigIntPlusOne = BigInt(joinArray)+BigInt(1)
    // const bigIntToString = getBigIntPlusOne.toString()
    // const result=bigIntToString.split('').map(Number) // или Array.from(str, (char)=>parseInt(char,10))
    // console.log(result)
    function plusOne(digits: number[]): number[] {
        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] !== 9) {
                digits[i]++;
                return digits;
            } else {
                digits[i] = 0;
            }
        }
    
        // If we are here, all digits were 9, and we need to add a new leading digit 1
        digits.unshift(1);
    
        return digits;
    }
};


// plusOne([4,3,2,1])
plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])

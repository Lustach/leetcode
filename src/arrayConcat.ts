// function getConcatenation(nums: number[]): number[] {
//     const result = []
//     function compute(){
//         for(let i = 0; i<=nums.length-1; i++){
//             result.push(nums[i])
//         }
//     }
//     while(result.length-1!==(nums.length-1)*2){
//         compute();
//     }
//     return result
// };

// console.log(getConcatenation([1,2,3,4]))

function getConcatenation(nums: number[]): number[] {
    return [...nums, ...nums]
};
console.log(getConcatenation([1,2,3,4]))
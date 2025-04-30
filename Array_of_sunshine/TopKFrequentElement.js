// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]
// Example 2:

// Input: nums = [7,7], k = 1

// Output: [7]
// Constraints:

// 1 <= nums.length <= 10^4
// -1000 <= nums[i] <= 1000
// 1 <= k <= number of distinct elements in nums

// class Solution {
//   /**
//    * @param {number[]} nums
//    * @param {number} k
//    * @return {number[]}
//    */
//   topKFrequent(nums, k) {}
// }

function topKFrequent(nums, k) {
  myObj = {};
  myArr = [];
  for (const num of nums) {
    myObj[num] = (myObj[num] || 0) + 1;
  }
  const sorted = Object.entries(myObj).sort((a, b) => b[1] - a[1]);
  console.log(sorted.splice(0, k));

  return myArr;
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3, 7], 2)); // [2,3]
console.log(topKFrequent([7, 7], 1)); // [7]

// Given an strs of strings strs, group all anagrams together into sublists.
//  You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:
// Input: strs = ["act","pots","tops","cat","stop","hat"]
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

// Example 2:
// Input: strs = ["x"]
// Output: [["x"]]

// Example 3:
// Input: strs = [""]
// Output: [[""]]

// Constraints:
// 1 <= strs.length <= 1000.
// 0 <= strs[i].length <= 100
// strs[i] is made up of lowercase English letters

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    for (let i = 0; i < strs.length; i++) {
      const count = {};
      for (const char of strs[i]) {
        count[char] = (count[char] || 0) + 1;
      }
      for (let j = 0; j < strs.length; j++) {
        if (strs[i].length === strs[j].length) {
          for (const char of strs[j]) {
            if (!count[char]) {
            }
            count[char] -= 1;
          }
        }
      }
    }
  }
}

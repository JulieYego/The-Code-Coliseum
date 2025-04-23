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

// class Solution {
//   /**
//    * @param {string[]} strs
//    * @return {string[][]}
//    */
const groupAnagrams = function (strs) {
  const map = {};
  // n = number of strings in the input array strs
  // k = maximum length of a single string
  for (const str of strs) {
    // O(n)
    const sorted = str.split('').sort().join('');
    // .split('') → O(k)
    // .sort() → O(k log k) for sorting characters
    //.join('') → O(k)
    // Total per string: O(k log k)
    // All strings: O(n * k log k)
    if (!map[sorted]) {
      map[sorted] = [];
    }
    map[sorted].push(str);
    // Inserting into a hash map is generally O(1) on average
    // For all n strings: O(n)
  }
  return Object.values(map);
  // Collects all values from the map (all grouped anagrams)
  // Also O(n)

  // SPACE
  // Map storage -> Worst case: all strings are unique → n groups
  // Each string is stored once: O(n * k)
  // Sorted string keys -> Each sorted string is of length k
  // O(n * k) total
};

console.log(groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']));

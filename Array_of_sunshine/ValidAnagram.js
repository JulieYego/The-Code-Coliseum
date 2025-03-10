// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:
// Input: s = "racecar", t = "carrace"
// Output: true

// Example 2:
// Input: s = "jar", t = "jam"
// Output: false

// Constraints:
// s and t consist of lowercase English letters.

// Brute force
// 1. Splitting the string returns an array of the letters in the string
// 2. Sort the array with letters as elements
// 3. Join the array back together and returns a string
// 4. Compare the two strings
const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let s_sort = s.split('').sort().join();
  let t_sort = t.split('').sort().join();
  return s_sort === t_sort;
};

console.log(isAnagram('racecar', 'carrace'));
console.log(isAnagram('jar', 'jam'));

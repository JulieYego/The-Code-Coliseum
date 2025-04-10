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

// Sorting
// 1. Splitting the string returns an array of the letters in the string
// 2. Sort the array with letters as elements
// 3. Join the array back together and returns a string
// 4. Compare the two strings
const isAnagram_sort = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let s_sort = s.split('').sort().join();
  let t_sort = t.split('').sort().join();
  return s_sort === t_sort;
};

// Put the strings into hashmaps and compare the keys
// const isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   let sMap = {};
//   let tMap = {};

//   for (const char of s) {
//     sMap[char] = (sMap[char] || 0) + 1;
//     // if (sMap[char]) {
//     //   sMap[character] += 1;
//     // } else {
//     //   sMap[character] = 1;
//     // }
//   }

//   for (const char of t) {
//     tMap[char] = (tMap[char] || 0) + 1;
//   }

//   for (const char in sMap) {
//     if (sMap[char] !== tMap[char]) {
//       return false;
//     }
//   }
//   return true;
// };

// Loop through the first string and count each character in a hashmap.
// Loop through the second string:
// Subtract 1 from the count for each character.
// If the character doesn’t exist or the count goes below 0, return false.
// At the end, return true.

const isAnagram = function (s, t) {
  const count = {};
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of t) {
    if (!count[char]) {
      // either char doesn't exist or is already at 0
      return false;
    }
    count[char] -= 1;
  }
  return true;
};

console.log(isAnagram('racecar', 'carrace'));
console.log(isAnagram('jar', 'jam'));

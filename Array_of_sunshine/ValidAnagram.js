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
const isAnagram_sort = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let s_sort = s.split('').sort().join();
  let t_sort = t.split('').sort().join();
  return s_sort === t_sort;
};

const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  s_map = {};
  t_map = {};

  // loops over each character in the string s
  // for each character, checks if it already exists in the object
  // if it does, it adds 1 to its count
  // if it doesn’t, it uses 0 as a starting value and sets it to 1
  // So essentially, it's counting how many times each character appears

  // example if s = "car"
  // s_map["c"] → doesn’t exist yet → undefined
  // undefined || 0 → evaluates to 0
  // So s_map["c"] = 0 + 1 = 1
  for (const char in s) {
    s_map[char] = (s_map[char] || 0) + 1;
  }

  for (const char in t) {
    t_map[char] = (t_map[char] || 0) + 1;
  }

  for (const key in s_map) {
  }
};

console.log(isAnagram('racecar', 'carrace'));
console.log(isAnagram('jar', 'jam'));

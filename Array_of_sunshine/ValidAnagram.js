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

// const isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   s_map = {};
//   t_map = {};

//   // loops over each character in the string s
//   // for each character, checks if it already exists in the object
//   // if it does, it adds 1 to its count
//   // if it doesn’t, it uses 0 as a starting value and sets it to 1
//   // So essentially, it's counting how many times each character appears

//   // example if s = "car"
//   // s_map["c"] → doesn’t exist yet → undefined
//   // undefined || 0 → evaluates to 0
//   // So s_map["c"] = 0 + 1 = 1
//   for (const char in s) {
//     s_map[char] = (s_map[char] || 0) + 1;
//   }

//   for (const char in t) {
//     t_map[char] = (t_map[char] || 0) + 1;
//   }

//   for (const key in s_map) {
//   }
// }
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

const my_anagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  // create a hashmap to store the count of each character in the string
  const myMap = {};
  for (const char of s) {
    myMap[char] = (myMap[char] || 0) + 1;
  }

  for (const char of t) {
    if (!myMap[char]) {
      return false;
    }
    myMap[char] -= 1;
  }
  return true;
};

console.log(my_anagram('racecar', 'carrace'));
console.log(my_anagram('jar', 'jam'));

// Given a string s, return true if it is a palindrome, otherwise return false.
// A palindrome is a string that reads the same forward and backward.
// It is also case-insensitive and ignores all non-alphanumeric characters.

// Example 1:
// Input: s = "Was it a car or a cat I saw?"
// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

// Example 2:
// Input: s = "tab a cat"
// Output: false
// Explanation: "tabacat" is not a palindrome.

// Constraints:
// 1 <= s.length <= 1000
// s is made up of only printable ASCII characters.

// class Solution {
//   /**
//    * @param {string} s
//    * @return {boolean}
//    */
//   isPalindrome(s) {}
// }

// function isPalindrome(s) {
//   const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase(); // O(n)
//   const reversed = cleaned.split('').reverse().join(''); // O(n)
//   return cleaned === reversed;
// }

function isPalindrome(s) {
  left = 0;
  right = s.length - 1;
  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) left++;
    while (left < right && !isAlphaNumeric(s[right])) right--;
    if (s.toLowerCase()[left] !== s.toLowerCase()[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function isAlphaNumeric(str) {
  return /^[a-z0-9]$/i.test(str);
}

console.log(isPalindrome('Was it a car or a cat I saw?'));
console.log(isPalindrome('tab a cat'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('!@#$%^&*()'));

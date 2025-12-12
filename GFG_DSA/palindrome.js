//palindrome - reversed === orginal

s = "ABCDBA";

/* function palindrome(s) {
  let res = s.split("").reverse().join("");
  return res === s;
}

console.log(palindrome(s)); 

Time: O(n)
space: O(n)

*/

// Two pointer approach

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(s));

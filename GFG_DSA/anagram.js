//Anagram - Check if two strings are anagrams of each other
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase.
// For example, "listen" is an anagram of "silent".
// Time Complexity: O(n), where n is the length of the strings
// Space Complexity: O(1), since the count array size is constant (26 for lowercase letters)

let s1 = "aabca";
let s2 = "abaad";

function anagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  let count = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    count[s1.charCodeAt(i) - "a".charCodeAt(i)]++;
    count[s2.charCodeAt(i) - "a".charCodeAt(i)]--;
  }
  for (let j = 0; j < count.length; j++) {
    if (count[j] !== 0) {
      return false;
    }
  }
  return true;
}

// console.log(anagram(s1, s2));

function check(s1, s2) {
  for (let i in s1) {
    console.log(i);
  }
}

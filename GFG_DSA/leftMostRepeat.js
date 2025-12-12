//left most repeating character in a string
// return the index of first left most character that is repeated.

//Navie approach

/* s = "output";

function navie(s) {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        return i;
      }
    }
  }
  return -1;
}

console.log(navie(s)); */

//Time: O(n^2)
//space: O(1)

//Better

/* let s = "output";

function leftMostRepeat(s) {
  if (s.length === 0) return false;
  let count = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (count[s.charCodeAt(i) - "a".charCodeAt(0)] > 1) {
      return i;
    }
  }
  return -1;
}
console.log(leftMostRepeat(s)); */

//Time: O(n+alphabet size)
//space: (alphabets)

//Efficient approach

let s = "abcc";

function leftMost(s) {
  let res = 0;
  const arr = new Array(256).fill(false);
  for (let i = s.length - 1; i >= 0; i--) {
    if (arr[s.charCodeAt(i)] === true) {
      res = i;
    }
    arr[s.charCodeAt(i)] = true;
  }
  return res;
}

console.log(leftMost(s));

//time : O(n+alphabets size)
//space: O(alpha space)
//Alphabet size is larger use Map - O(n) - based on input length

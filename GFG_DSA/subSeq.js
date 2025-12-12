//sub sequence of characters
//string obtained by removing all, zero or more characters, the chars that are left shud be in the same order.
//sub string - shud be contiguous and do not miss the middle char
// sub sequence - can remove the middle chars but order should be same.

//iterative

let s1 = "aabca";
let s2 = "ba";
/*
function isSubSeq(s1, s2) {
  let i = 0;
  for (let j = 0; j < s1.length && i < s2.length; j++) {
    if (s1[j] === s2[i]) {
      i++;
    }
  }
  return i == s2.length;
}

console.log(isSubSeq(s1, s2)); */

//time : O(m+n)
//space: O(1)

//recursive

function isSubSeq(s1, s2, m, n) {
  if (n === 0) return true;
  if (m === 0) return false;
  if (s1[m - 1] === s2[n - 1]) {
    return isSubSeq(s1, s2, m - 1, n - 1);
  } else {
    return isSubSeq(s1, s2, m - 1, n);
  }
}

console.log(isSubSeq(s1, s2));

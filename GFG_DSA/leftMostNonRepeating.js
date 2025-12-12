//let s = "abcdcba";

//Navie approach

/* function leftMostNonRepeat(s) {
  if (s.length === 0) return false;
  let count = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (count[s.charCodeAt(i) - "a".charCodeAt(0)] === 1) {
      return s[i];
    }
  }
  return -1;
}
console.log(leftMostNonRepeat(s)); */

//better

/* function leftMostNonRepeat(s) {
  if (s.length === 0) return false;
  let count = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (count[s.charCodeAt(i) - "a".charCodeAt(0)] === 1) {
      return s[i];
    }
  }
  return -1;
}
console.log(leftMostNonRepeat(s)); */

//efficient

let s = "adbcba";

function leftMost(s) {
  const arr = new Array(256).fill(-1);
  for (let i = 0; i < s.length; i++) {
    if (arr[s.charCodeAt(i)] == -1) {
      arr[s.charCodeAt(i)] = i;
    } else if (arr[s.charCodeAt(i)] >= 0) {
      arr[s.charCodeAt(i)] = -2;
    }
  }
  let n = s.length;
  for (let i = 0; i < 256; i++) {
    if (arr[i] >= 0 && arr[i] < n) {
      n = arr[i];
    }
  }

  if (n == s.length) {
    return "$";
  } else {
    return s[n];
  }
}

console.log(leftMost(s));

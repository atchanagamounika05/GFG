let sentence = "abc bcd ef";

/* let res = sentence.split(" ").reverse().join(" ");
console.log(res); */

function reverse(s, l, h) {
  console.log(s);
  let arr = s.split("");
  while (l < h) {
    [arr[l], arr[h]] = [arr[h], arr[l]];
    l++;
    h--;
  }
  s = arr.join("");
  return s;
}

function reverseWords(s) {
  let n = s.length;
  start = 0;
  for (let end = 0; end < n; end++) {
    if (s[end] === " ") {
      s = reverse(s, start, end - 1);
      start = end + 1;
    }
  }
  s = reverse(s, start, n - 1);
  return reverse(s, 0, n - 1);
}

reverseWords(sentence);

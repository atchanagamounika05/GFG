//1.palindrome
// let str = "madam";
//1. normal
/* let res = str.split("").reverse().join("");
console.log(res === str); */

//2. iterative
/* let res = [];
for (let i = str.length - 1; i >= 0; i--) {
  res.push(str[i]);
}
console.log(res.join("") === str); */

//3. DSA
/* function palindrome(str) {
  console.log(str);
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
    return true;
  }
}
console.log(palindrome(str)); */

//2.Remove vowels from Sentence
/* let vowels = ["a", "e", "i", "o", "u"];
let sentence = "The song is so sweet and good";
let res = [];
for (let char of sentence) {
  if (!vowels.includes(char.toLowerCase())) {
    res.push(char);
  }
}
console.log(res.join("")); */

//3. Mask characters
//3245313412345345 => 324531341234####
/* const str = "3572767245268324";
function mask(str, n) {
  let text = "#".repeat(n);
  return str.slice(0, str.length - n) + text;
}
console.log(mask(str, 4)); */

//4. encoding characters
/* let str = "Mouni"; // shift by 2 --> "crrng"

function shifts(str, n) {
  let res = "";
  for (let i in str) {
    let toAscii = str.charCodeAt(i);
    let plus = toAscii + n;
    console.log(plus);
    res += String.fromCharCode(plus);
  }
  return res;
}
console.log(shifts(str, 3)); */

//5. substring
/* let str = "hawai";

for (let i = 0; i < str.length; i++) {
  for (let j = i + 2; j < str.length; j++) {
    console.log(str.slice(i, j));
  }
} */

//6. convert odd to even and even to odd
/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.map((item) => (item % 2 === 0 ? item - 1 : item + 1))); */

//7. Find sum less than 40
/* let arr = [10, 5, 25, 30, 20, 75, 85, 68];
console.log(arr.reduce((acc, cur) => (cur < 40 ? acc + cur : acc), 0)); */

//8. retuen arr of name from objects
/* const users = [
  { name: "user1", yearOfExp: 5 },
  { name: "user2", yearOfExp: 2 },
  { name: "user3", yearOfExp: 4 },
  { name: "user4", yearOfExp: 3 },
  { name: "user5", yearOfExp: 1 },
]; */

/* console.log(
  users
    .filter((item) => item.yearOfExp <= 3 && item.name)
    .map((item) => item.name)
); */
// console.log(users.sort((a, b) => a.yearOfExp - b.yearOfExp)); // number sort

// let arr = [5, 3, 4, 1, 2];
// console.log(arr.sort()); // string sort

// let arr = [10, 2, 1];
// console.log(arr.sort()); // [1, 10, 2] -- lexical sort
// console.log(arr.sort((a, b) => a - b)); --- numerical sort

//9.sum of evens and odds

/* let arr = [1, 2, 3, 4, 5]; //{even:6, odd:9}
let res = arr.reduce(
  (acc, cur) =>
    cur % 2 === 0
      ? { ...acc, even: acc.even + cur }
      : { ...acc, odd: acc.odd + cur },
  { even: 0, odd: 0 }
);
console.log(res); */

//10. average age of family mem

/* let family = [
  {
    mem1: "user1",
    age: 23,
  },
  {
    mem2: "user2",
    age: 52,
  },
  {
    mem3: "user3",
    age: 38,
  },
  {
    mem4: "user4",
    age: 12,
  },
];

console.log(
  family.reduce((acc, cur) => {
    return acc + cur.age / family.length;
  }, 0)
); */

//11. count frequency of chars

// let arr = ["a", "h", "e", "a", "b", "e"]; // {a:2,b:1,e:2,h:1}
/* let res = [];
let count = {};
for (let i of arr) {
  if (res.includes(i)) {
    count[i]++;
  } else {
    res.push(i);
    count[i] = 1;
  }
}
console.log(count); */

/* console.log(
  arr.reduce(
    (acc, cur) =>
      cur in acc ? { ...acc, [cur]: acc[cur] + 1 } : { ...acc, [cur]: 1 },
    {}
  )
); */

// coding drill part 2
//arrange the words in the sentence in decending order
/* let sentence1 = "Tanjiro was a good and kind hearted guy";


function sortSentence(sentence) {
  let words = sentence.split(" ");

  words.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      return a.localeCompare(b);
    }
  });
  return words.join(" ");
}
console.log(sortSentence(sentence1));

 */
/* let sentence2 = "Shinobu is my favorite character";

let res = sentence2
  .split(" ")
  .sort((a, b) => a.length - b.length)
  .join(" ");

console.log(res); */

/* let input = "react is a library"; //tcaer si a yrarbil
let words = input.split(" ");

let res = words.map((word) => word.split("").reverse().join(""));
console.log(res.reverse().join(" ")); */

/* for (let i of words) {
  res.push(i.split("").reverse().join(""));
}
console.log(res.join(" ")); */

// const arr = [1, 5, 2, 4, 3, 4, 2, 6, 3, 2];

/* let res = arr.reduce((acc, curr) => (curr > acc ? (acc = curr) : acc), 0);
console.log(res); */

/* let res = arr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
let result = Object.entries(res);
console.log(result.reduce((max, curr) => (curr[1] > max[1] ? curr : max))[0]); */

/* let obj = {};
for (let i of arr) {
  if (i in obj) {
    obj[i] += 1;
  } else {
    obj[i] = 1;
  }
}
console.log(obj); */

//count vowels in a sentence
/* let str = "hello world";
let vowels = ["a", "e", "i", "o", "u"];
let count = 0;
for (let i of str) {
  if (vowels.includes(i)) {
    count++;
  }
}
console.log(count); */

//Capitalize First Letter of Each Word
// let input = "functional programming is fun";
// Output: "Functional Programming Is Fun"
/* let arr = input.split(" ");
let res = arr.map((i) => i[0].toUpperCase() + i.slice(1, i.length));
console.log(res.join(" ")); */

// 3. Find the Most Frequent Word
// let input = "this is a test and this is only a test for test";
// Output: "test"

/* let arr = input.split(" ");
let res = arr.reduce((acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc), {}); */

/* console.log(
  arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {})
); */

/* let arr2 = Object.entries(res);
let arr3 = arr2.sort((a, b) => b[1] - a[1]);
console.log(arr3[0][0]); */
// let result = arr2.reduce((acc, val) => (val[1] > acc[1] ? val : acc))[0];
// console.log(result);

// 4. Remove Duplicates from Array
// Input: [1,2,2,3,1,4]
// Output: [1,2,3,4]
// let arr = [1, 2, 2, 3, 1, 4];
/* console.log(
  arr.reduce((acc, curr) => (!acc.includes(curr) && acc.push(curr), acc), [])
); */
/* let set = new Set(arr);
console.log(set); */

// 5. Group Words by First Letter
// Input: ["apple", "banana", "apricot", "blueberry", "cherry"]
// Output: { a: ["apple", "apricot"], b: ["banana", "blueberry"], c: ["cherry"] }

// let arr = ["apple", "banana", "apricot", "blueberry", "cherry"];
/* let obj = {};
for (let i of arr) {
  if (obj[i[0]]) {
    obj[i[0]].push(i);
  } else {
    obj[i[0]] = [i];
  }
}
console.log(obj); */

/* let res = arr.reduce((acc, cur) => {
  acc[cur[0]] ? acc[cur[0]].push(cur) : (acc[cur[0]] = [cur]);
  return acc;
}, {});
console.log(res); */

// 6. Sort Words by Frequency
// Input: "one two two three three three"
// Output: ["three", "two", "one"]

/* let arr = "one two two three three three";
let arr1 = arr.split(" ");
let res = arr1.reduce(
  (acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc),
  {}
);
let arr2 = Object.entries(res);
console.log(arr2);
arr2.sort((a, b) => b[1] - a[1]);
console.log(arr2[0][0]); */
// console.log(arr2.reduce((max, cur) => (cur[1] > max[1] ? cur : max))[0]);

// 7. Flatten Nested Arrays
// Input: [1, [2, [3, 4]], 5]
// Output: [1, 2, 3, 4, 5]

/* let arr = [1, [2, [3, 4]], 5];
// console.log(arr.flat(2));

Array.prototype.myFlat = function (depth) {
  let res = [];
  function getFlat(arr, depth) {
    for (let i of arr) {
      if (Array.isArray(i) && depth) {
        getFlat(i, depth - 1);
      } else {
        res.push(i);
      }
    }
  }
  getFlat(arr, depth);
  return res;
};
console.log(arr.myFlat(2)); */

// 8. Pipeline String Transformations
// Input: "  hello world  "
// Steps: trim -> toUpperCase -> reverse
// Output: "DLROW OLLEH"

// let str = "  hello world  ";
// let arr = str.split(" ");
/* console.log(arr);
let arr3 = [];
for (let i in arr) {
  if (arr[i] !== "") {
    arr3.push(arr[i]);
  }
}
console.log(arr3.join(" ").toString()); */
/* let arr1 = [];

arr1 = arr.filter((i) => i !== "");
let res1 = arr1.join(" ").toString();
let res2 = res1.toLocaleUpperCase();

let res3 = res2.split(" ");
let res4 = [];
for (let i of res3) {
  res4.push(i.split("").reverse().join(""));
  console.log(res4.length);
}

console.log(res4.reverse().join(" ")); */

//8. Find Anagrams in a List

// Input: ["listen", "silent", "enlist", "google", "gooegl"]
// Output: [["listen", "silent", "enlist"], ["google", "gooegl"]]

// let arr = ["listen", "silent", "enlist", "google", "gooegl"];

/* let result = arr.reduce(
  (acc, cur) => (
    acc[cur.split("").sort().join("")]
      ? acc[cur.split("").sort().join("")].push(cur)
      : (acc[cur.split("").sort().join("")] = [cur]),
    acc
  ),
  {}
);
// console.log(Object.values(result));
*/

/* let res = arr.reduce((acc, cur) => {
  let key = cur.split("").sort().join("");
  // acc[key] = acc[key] || [];
  // acc[key].push(cur);
  (acc[key] ||= []).push(cur);
  return acc;
}, {});
console.log(Object.values(res)); */

// ||= treats those as falsy → will assign.

// ??= only assigns if value is null or undefined.

// &&=  Update only if truthy

// 11. Transform CSV to JSON
// Input:
// "name,age\nJohn,30\nJane,25"
// Output:
// [ { name: "John", age: "30" }, { name: "Jane", age: "25" } ]
// ["name,age", "John,30", "Jane,25"];
// [obj[arr[0]] = arr[1]
/* [
  ["name", "age"],
  ["John", "30"],
  ["Jane", "25"],
];

["name", "age"][("John", "30")][("Jane", "25")];
{
  name: "john";
  age: 30;
}
{
  name: "Jane";
  age: 25;
} */

/* let str = "name,age\nJohn,30\nJane,25";
let arr = str.split("\n");
let arr1 = arr.map((i) => i.split(","));
let obj = {};
arr1.reduce((acc, cur) => {
  console.log(cur);

  // acc[cur[0]]= {cur[0][1]};
  return acc;
}, []);
console.log(obj); */
// { name: "John", age: "30" }

// let arr5 = [["name", "age"][("John", "30")]];
// [("name", "john")][("age", "30")];
// console.log(arr5);
// let keys = arr5[0];
// let values = arr5.unshift();
// console.log(keys, values);

// "John", "30"; // , operator - Evaluates both operands and Returns the last one. -> 30
//["name", "age"]["30"] - there is no 30th, only 0,1 are name,age -> undefined

// console.log(arr5);
// let result = [];
// result.push(arr5[0]);
// console.log(result);

//var - 0,1,2,3,4 all at once after 1 sec
function print (){
for(var i=0;i<5;i++){
    setTimeout(function(i){
        console.log(i)
    },1000,i)
}
}
print()

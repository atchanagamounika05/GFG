//splice - add, remove, delete
//splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items
// arr.splice(start[, deleteCount, elem1, ..., elemN])
// let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
// arr.splice(0, 3, "Let's", "dance");

// console.log(arr);

//insert
// let arr = ["I", "study", "JavaScript"];

// // from index 2
// // delete 0
// // then insert "complex" and "language"
// arr.splice(2, 0, "complex", "language");
// console.log(arr);

// -ve indexes are allowed
// let arr = [1, 2, 5];

// // from index -1 (one step from the end)
// // delete 0 elements,
// // then insert 3 and 4
// arr.splice(-1, 0, 3, 4);

// console.log(arr); // 1,2,3,4,5

// slice - doesn't modify the original array
// let arr = ["t", "e", "s", "t"];
// console.log(arr.slice()); // copy of original array
// console.log(arr.slice(1, 2));
// console.log(arr.slice("-2"));

// concat
// let arr = [1, 2];
// // console.log(arr.concat([3, 4]));
// let obj = {
//   0: "1",
//   length: 1,
// };
// let arrayLike = {
//   0: "something",
//   length: 1,
// };
// console.log(arr.concat(obj));

// if an array-like object has a special Symbol.isConcatSpreadable property then it is treated as array by concat
// let arr = [1, 2];
// let obj = {
//   0: "something",
//   1: "else",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
// };
// console.log(arr.concat(obj));

// iterate- for each
// ["hai", "hello", "hi"].forEach((item, index, array) => {
//   console.log(`${item}, ${index}, ${array}`);
// });

// search in an array
// indexOf, lastIndexOf, includes
//arr.indexOf(item, from); - yes index or -1
//indexOf uses the strict equality === for comparison. So, if we look for false, it finds exactly false and not the zero.
// let arr = [2, 3, 4];
// console.log(arr.includes(1));

// The includes method handles NaN correctly
// const arr = [NaN];
// console.log(arr.indexOf(NaN));
// console.log(arr.includes(NaN));

// find and findIndex/findLastIndex
//arr.find(function(item, index, array){})If it returns true, the search is stopped, the item is returned. If nothing is found, undefined is returned.
// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];
// let user = users.find((item) => item.id === 1);
// console.log(user);
// findIndex same as find but returns index instead of element if no -1
//findLastIndex - search rom right to left

//find - one item
//filter - many items - returns an array of all matching elements:
//filter(function(item, index, array)
// let res = users.filter((item) => item.id < 3);
// console.log(res);

// Tramsform
// map - map(function(item, index, array)
//It calls the function for each element of the array and returns the array of results.

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
// console.log(lengths);

// sort() - sorts in place
// let arr = [1, 2, 15];

// the method reorders the content of arr
// console.log(arr.sort()); //[1,15,2] //all elements are converted to strings for comparisons "2">"15"
// arr.sort((a, b) => a - b);
// console.log(arr);

//Use localeCompare for strings
// let countries = ["Österreich", "Andorra", "Vietnam"];
// console.log(countries.sort((a, b) => a - b)); // wrong
// countries.sort((a, b) => a.localeCompare(b)); //right
// console.log(countries);

//reverse split join
// let arr = "Bilbo, Gandalf, Nazgul, Saruman".split(", ", 2);
// console.log(arr);

// let arr = ["Bilbo", "Gandalf", "Nazgul"];

// let str = arr.join(";");
// console.log(str);
//reduce(function(accumulator, item, index, array)
// let arr = [1, 2, 3, 4, 5];
// let res = arr.reduce((sum, current) => sum + current, 0);
// console.log(res);
//No initial value? take first item by default but it is risk when working with empty array
//arr.reduceRight - right to left
// let arr = [5, 4, 3];
// let res = arr.reduceRight((sum, current) => sum + current);
// console.log(res);

// Array.isArray;
// console.log(typeof {}); //object
// console.log(typeof []); //object
// console.log(Array.isArray({})); //false
// console.log(Array.isArray([])); //true

//thisArg

/* let army = {
  minAge: 17,
  maxAge: 30,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

let users = [{ age: 16 }, { age: 20 }, { age: 15 }, { age: 27 }];
// let soldiers = users.filter(army.canJoin, army);
let soldiers = users.filter((user) => army.canJoin(user));

console.log(soldiers); */

// some(), every()
// arr.some() immediately returns true and stops iterating over the rest of items; if fn returns a falsy value, arr.every() immediately returns false and stops iterating over the rest of items as well.
/* function arrayEquals(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
}
console.log(arrayEquals([1, 2, 3], [1, 2, 3])); */
// arr.fill(value, start, end) – fills the array with repeating value from index start to end.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.copyWithin(3, 0, 2));

//arr.flat(depth)/arr.flatMap(fn) create a new flat array from a multidimensional array.

// Task 1:
//camelize("background-color") == 'backgroundColor';

// let str = "-webkit-transition";
/*let arr = str.split("-");
let arr2 = [];
for (let i of arr) {
  if (arr.indexOf(i) !== 0) {
    i = i[0].toUpperCase() + i.slice(1);
    arr2.push(i);
  }
}
let res = arr[0].concat(arr2.join(""));
console.log(res); */

/* let res = str
  .split("-")
  .map((word, index) =>
    index === 0 ? word : word[0].toUpperCase() + word.slice(1)
  )
  .join("");
console.log(res); */

// task 2
/* let arr = [5, 3, 8, 1];
// arr.filter((value) => t1 <= value && value <= t2);
function filterRange(arr, t1, t2) {
  let res = arr.filter((value) => value >= t1 && value <= t2);
  return res;
}

console.log(filterRange(arr, 1, 4));
console.log(arr);
 */

// task 3
/* let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

console.log(filterRangeInPlace(arr, 1, 4)); */

//Task 4 - sort in descending order
// let arr = [5, 2, 1, -10, 8];
// console.log(arr.sort((a, b) => a - b));

//task 5 - copy and sort
// let arr = ["HTML", "JavaScript", "CSS"];
// console.log(arr.slice().sort()); // copy and sort
// let arr1 = [...arr];
// arr1.sort((a, b) => a.localeCompare(b));
// console.log(arr);
// console.log(arr1);

//Task -6 - Create an extendable calculator
/* let str = "3 + 7";
let arr = str.split(" ");
console.log(eval(arr[0] + arr[1] + arr[2])); */

/* function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  this.calculate = function (str) {
    let arr = str.split(" ");
    let a = +arr[0];
    let op = arr[1];
    let b = +arr[2];
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };
  this.addMethod = function (op, func) {
    this.methods[op] = func;
  };
}

let calc = new Calculator();
// console.log(calc.calculate("3 + 7"));

calc.addMethod("/", (a, b) => a / b);
console.log(calc.methods);
console.log(calc.calculate("10 / 2")); */

//Task -7 Map to names
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [john, pete, mary];
// let names = users.map((item) => console.log(item.name));

//Task 8 Map to objects
/* let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];
 */

// users.map((item) => {
//   res.push({ fullname: item.name + " " + item.surname, id: item.id });
// });

/* console.log(
  users.map((item) => ({
    fullname: item.name + " " + item.surname,
    id: item.id,
  }))
);

let arr = [1, 2, 5, 4, 4, 3];
let freq = new Map();
for (let i = 0; i < arr.length; i++) {
  freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
  console.log(freq);
  if (freq.get(arr[i]) > 1) {
    console.log(arr[i]);
  }
} */

/* let arr = [1, 2, 3, 5, 3, 4];
arr.sort((a, b) => a - b);
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== i + 1) {
    console.log(arr[i]);
    break;
  }
} */

/* let k=2
let arr=[1,2,2,2,3,3,3]
let freq={}
for(let i of arr){
    freq[i]=(freq[i]||0)+1
}
const res = Object.entries(freq)
console.log(res)
let result = res.map(([num,count])=> [count,parseInt(num)])
console.log(result.sort((a,b)=>a-b))
console.log(result.splice(k-1).map(num=>num[1])) */

// Task-9
// sort by age
/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];
let res = [];
arr.sort((a, b) => a.age - b.age);
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name); */

// Task - 10 - Shuffle an array
// let arr = [1, 2, 3];
// arr.sort(() => Math.random() - 0.5);
// console.log(arr);

// Task - 11 - Get average age
/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];
let sum = 0;
let res = arr.reduce((acc, curr) => (acc += curr.age), 0) / arr.length;
console.log(res); */

//Task - 12 - Filter unique array members
/* let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(strings) {
  let res = [];
  for (let i = 0; i < strings.length; i++) {
    if (!res.includes(strings[i])) {
      res.push(strings[i]);
    }
  }
  return res;
}

console.log(unique(strings)); */
//number of comaprisions problem

// Task-13 - Create keyed object from array
/* let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
]; */

/*function groupById(users) {
  let res = {};
  for (let i of users) {
    res[i.id] = i;
  }
  return res;
}

let usersById = groupById(users);
console.log(usersById);
 */
/* (acc, curr) => (acc += curr.age), 0;
let res = users.reduce((obj, value) => {
  obj[value.id] = value;
  return obj;
}, {});
console.log(res); */

//flat an array

// function flat(arr) {
//   res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       res = res.concat(flat(arr[i]));
//     } else {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// console.log(flat([1, 2, 3, [4, [5, 6]]]));

//flat an array up to the depth
// let arr = [1,[2,[3,4]]]
// let level = 1

// function flatArray(arr,level){
//     let res = []
//     for(let i=0;i<arr.length;i++){
    
//         if(Array.isArray(arr[i]) && arr[i]!== null && level > 0){
//           res= res.concat(flatArray(arr[i],level = level-1))
//         }else{
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// console.log(flatArray(arr,level))

//Map- Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

// we can set map[key] = 2, this is treating map as a plain JavaScript object, so it implies all corresponding limitations

/* let map = new Map();
map.set(1, 2);
map.set("one", 1);
map.set(true, "bool");
console.log(map.get(true)); */

//Map can also use objects as keys.
// let john = { name: "John" };

// let map = new Map();
// map.set(john, 123);
// console.log(map.get(john));

// we can’t use another Object as a key in Object.
// let obj = {};

// obj[john] = 123;
// console.log(obj); //{ '[object Object]': 123 }

/* To test keys for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well. */
//Every map.set call returns the map itself - chaining
/* map.set(1, 2).set(3, 4).set(4, 5);
console.log(map); */

//Iteration
//map.keys() // iterable for keys
//map.values() //iterable for values
//map.entries() //iterabel for entries[key,value] // default usage in for..of

// let recipeMap = new Map([
//   ["onion", 50],
//   ["tomato", 70],
//   ["carrot", 40],
// ]);

// console.log(recipeMap.keys());
// console.log(recipeMap.values());
// console.log(recipeMap.entries());

//The iteration goes in the same order as the values were inserted
// recipeMap.forEach((value, key, map) => console.log(key, value)); // values, keys, map

//Object.entries: Map from Object -
//can pass an array (or another iterable) with key/value pairs for initialization

/* const obj = {
  name: "john",
  age: "20",
};

// console.log(Object.entries(obj)); */

//Object.fromEntries - Object from Map - given an array of [key, value] pairs, it creates an object from them:

/* let prices = [
  ["orange", 20],
  ["banana", 30],
  ["guava", 40],
];

console.log(Object.fromEntries(prices)); */

// let map = new Map();
// map.set("banana", 6);
// map.set("orange", 3);
// map.set("Guvava", 5);

// console.log(map);
// console.log(Object.fromEntries(map.entries()));
//A call to map.entries() returns an iterable of key/value pairs, exactly in the right format for Object.fromEntries.

// console.log(Object.fromEntries(map));
//Object.fromEntries expects an iterable object as the argument. Not necessarily an array. And the standard iteration for map returns same key/value pairs as map.entries().

//SET -A Set is a special type collection – “set of values” (without keys) no repeat

// new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

// set.add(value) with the same value don’t do anything.
/* let set = new Set();

let user1 = { name: "user1" };
let user2 = { name: "user2" };
let user3 = { name: "user3" };
set.add(user1);
set.add(user2);
set.add(user1);
set.add(user3);
set.add(user2); */

// console.log(set.size);

// duplicates find - arr.find - set(recommended)

// for (let user of set) {
//   console.log(user);
// }

// set.forEach((value, valueAgain, set) => console.log(value));

// Tasks 1 :
/* let values = [
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

let set = new Set(values);

console.log(Array.from(set)); */

//Array.from() is a static method in JavaScript that creates a new, shallow-copied Array instance from an array-like or iterable object.

// Task-2:
// Anagrams are words that have the same number of same letters, but in different order.
/* let str1 = "teacher";
let str2 = "cheater";
let map1 = new Map();
let map2 = new Map();

for (let i of str1) {
  map1.set(i, (map1.get(i) || 0) + 1);
}
for (let i of str2) {
  map2.set(i, (map2.get(i) || 0) + 1);
}
console.log(map1);
console.log(map2);

let map1keys = map1.keys();
console.log(map1keys);
let res = [];
let flag = false;
for (let i of map1keys) {
  if (map1.get(i) === map2.get(i)) {
    flag = true;
  }
}
console.log(flag);
if (flag) {
  console.log(Array.from(map1keys));
} */

//with Map
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
/* let map = new Map();
for (let word of arr) {
  let sorted = word.toLowerCase().split("").sort().join("");
  map.set(sorted, word); //If we ever meet a word the same letter-sorted form again, then it would overwrite the previous value with the same key in the map.
}
console.log(map);
console.log(Array.from(map.values())); */

// with objects
/* let obj = {};
for (let i of arr) {
  let sorted = i.toLowerCase().split("").sort().join("");
  obj[sorted] = i;
}
console.log(Array.from(Object.values(obj))); */

/* let map = new Map();

map.set("name", "John");

let keys = map.keys();
let res = Array.from(keys);
res.push("Nine");
console.log(res); */

/* let readMsgs = new WeakSet();

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

readMsgs.add(messages[0]);
readMsgs.add(messages[1]);
readMsgs.add(messages[0]);

readMsgs.has(messages[2]);
messages.shift();
console.log(readMsgs); */

/* let map = new WeakMap();
let date = new Date(2017, 1, 1);
map.set(message[0], date); */

//object - tasks
/* let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

let sum = 0;
for (i of Object.values(salaries)) {
  sum += i;
}
console.log(sum); */

let person = {
  name: "mounika",
  place: "Hyderabad",
  greet: "Morning",
};
console.log(Object.entries(keys).length);

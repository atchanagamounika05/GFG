//map prototype

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.map((num) => num * 2));
// console.log(arr.map(callback));
/* function callback(num) {
  return num ** 2;
} */

/* let res = [];
for (let i = 0; i < arr.length; i++) {
  res.push(callback(arr[i]));
}
console.log(res); */

/* Array.prototype.myMap = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }
  return res;
};
console.log(arr.myMap(callback)); */

//filter prototype

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.filter((i) => i % 2 === 0));
/* function callback(num) {
  return num % 2 === 0;
} */

/* Array.prototype.myFilter = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(this, this[i], i, this)) res.push(this[i]);
  }
  return res;
};

console.log(arr.myFilter(callback)); */

//reduce prototype
/* function getSum(acc, cur) {
  return acc + cur;
}

console.log(arr.reduce(getSum, 5)); */

/* function callback(sum, num) {
  return sum + num;
}
let obj = { 1: "one", 2: "two" };
let str = "hai";
Array.prototype.myReduce = function (callback, init) {
  console.log(typeof this);
  if (typeof callback !== "function" || typeof this !== "object")
    throw new Error("check the arguments passed");

  let sum = init ? init : this[0];
  let initial = init ? 0 : 1;
  for (let i = initial; i < this.length; i++) {
    sum = callback.call(this, sum, this[i], i, this);
  }
  return sum;
};

console.log(arr.myReduce(callback, 0)); */

// flat prototype an array

// let arr = [1, 2, [3, [4, 5]], [[[6, 7]]]];
// console.log(arr.flat(3));

/* Array.prototype.myflat = function (depth = 3) {
  let res = [];

  function getFlat(arr, depth) {
    for (let i of arr) {
      if (Array.isArray(i) && i.length !== 0 && depth) {
        getFlat(i, depth - 1);
      } else {
        res.push(i);
      }
    }
  }
  getFlat(this, depth);
  return res;
};
console.log(arr.myflat()); */

//call prototype

/* const obj1 = {
  name: "Tanjiro",
  anime: "Demon slayer",
  //display
};

function display(cause1, cause2) {
  console.log(
    `My fav character from ${this.anime} is ${this.name} because of his ${cause1} and ${cause2}`
  );
} */

/* Function.prototype.myCall = function (obj, args) {
  obj.display = this;
  obj.display(args);
  delete obj.display; // as it manipulation the obj object
}; */

/* Function.prototype.myApply = function (obj, args) {
  const display = Symbol("display");
  obj1[display] = this; //obj.display = this
  obj1[display](...args); //Call the function stored on obj1 under the key that’s stored in display, passing in the arguments from the args array.”
  delete obj[display]; // as it manipulation the obj object
}; */
// display.myCall(obj, "kind");
// display.myApply(obj1, ["kind", "nature"]);

// display.call(obj, "kind nature");

//why obj[display] but not obj.display
// obj[display] = evalutes the variable inside [] - When you know the exact property name
//obj.display = dont evaluate simpley consider as string => obj["display"] - When the property name is dynamic, stored in a variable, or is a Symbol

/* const key = "username";
const obj = {
  username: "Tanjiro",
};

console.log(obj[key]);
console.log(obj["username"]); */

// console.log(obj.username); // Tanjiro (dot notation)
// console.log(obj["username"]); // Tanjiro (bracket with string)
// console.log(obj[key]); // Tanjiro (bracket with variable)
// console.log(obj.key); // undefined (dot with literal "key", not the variable)

/* const display1 = "sayHello";

const obj2 = {
  sayHello: function (name) {
    console.log("Hello, " + name);
  },
}; */

// obj2[display1]("Tanjiro"); // same as obj1.sayHello("Tanjiro")

/* function greet(first, last) {
  console.log(`Hai ${first} ${last}`);
}

let obj3 = {};
const display3 = greet;
const args = ["Tanjiro", "Kamado"];
obj3[display3] = greet;
obj3[display3](...args); */

// obj.key → looks for a property literally called "key"

// obj["key"] → also a literal "key" property

// obj[key] → looks for the property whose name matches the value stored in key

//1.
/* const key = "name";
const obj = {
  name: "Tanjiro",
  age: 16,
};

console.log(obj[key]); //Tanjiro */

//2.
/* const key = "age";
const obj = {
  key: "not the age",
  age: 16,
};

console.log(obj.key); //not the age
console.log(obj[key]); // 16 */

//3.
/* const user = {
  username: "Zenitsu",
  level: "Intermediate",
};

function getValue(obj, prop) {
  return obj[prop];
}

console.log(getValue(user, "username")); // Zenitsu
console.log(getValue(user, "level")); // intermediate */

//4.
/* const obj = {
  "first-name": "Inosuke",
  lastname: "Hashibira",
};

const key1 = "first-name";
const key2 = "lastname";

console.log(obj[key1]); //Inosuke
console.log(obj.key1); //undefined
console.log(obj[key2]); //Hashibira */

//5.
/* const dynamicKey = "breathingStyle";
const obj = {
  name: "Giyu",
  [dynamicKey]: "Water Breathing",
};

console.log(obj.breathingStyle); //Water Breathing
console.log(obj[dynamicKey]); //Water Breathing */

//6.
/* const key = "powerLevel";
const character = {
  name: "Rengoku",
  powerLevel: 9000,
  key: "Not a real key",
};

console.log(character["key"]); // Not a real key
console.log(character.key); //Not a real key
console.log(character[key]); //9000 */

//bind prototype

/* let obj = {
  first: "Tanjiro",
  last: "Kamado",
};

function displayMsg(age) {
  console.log(`Hi ${this.first} ${this.last}! age: ${age} `);
}
 */
// let res = displayMsg.bind(obj, 16);
// res();

/* Function.prototype.myBind = function (context, ...args) {
  const display = Symbol("display");
  context[display] = this;
  return function (...rest) {
    context[display](...rest, ...args);
    delete context[display];
  };
};

let res = displayMsg.bind(obj, 20);
res(16); */

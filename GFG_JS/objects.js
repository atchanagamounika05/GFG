//every key is a string
//compute
// const readlineSync = require("readline-sync");
// const key = readlineSync.question("wanna know about Nezuko - ");
// const animes = readlineSync.question("what animes do you watch - ");

// const person = {
//   name: "Nezuko",
//   anime: "Demon Slayer",
//   brother: "Tanjiro",
//   "is demon": false,
//   friends: ["hashiras", "Zenitsu", "Inosuke"],
//   1: "one", // by default keys are converted to strings.
//   [animes]: "good one",
// };

// console.log(person[key]); // compute key by input
// console.log(person["name"]); // name is a property
// console.log(person[animes]); // animes is computed to have keys dont wrap b/w ""
// console.log(person);

// console.log(person["is demon"]);
// person.is demon ❌
// person[is demon] ❌
//person.name  ✅
// person["is demon"] ✅ //key has 2 with space letters so use [] instead of .
// console.log(person);

// add functions as properties

/* const obj = {
  name: "mounika",
  role: "developer",
  greet: function () {
    console.log("hai");
  },
  bye() {
    console.log("bye");
  },
}; */

// obj.greet()
// obj.bye();

// short hand

// function obj(name, course) {
//   /* return {
//     name: name,
//     course: course,
//   }; */
//   return {
//     name,
//     course,
//   };
// }

// console.log(obj("mounika", "JS"));
// const std1 = obj("student1", "reactjs");
// const std2 = obj("student2", "redux");
// console.log(std1);

// console.log({ std1, std2 });

// const username = "Shiva";
// const isStudent = "yes";

// console.log({ username, isStudent });

//for in - in(has?)
// console.log("name" in obj);
// console.log("age" in obj);

//loop over objects always returns keys
/* for (let key in obj) {
  console.log(key, obj[key]);
} */

//flatten the array

/* function flat(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flat(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(flat([1, 2, 3, [4, 5]])); */

//flat an object

/* function flat(obj, parent, res = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let fullKey = parent ? `${parent}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        flat(obj[key], fullKey, res);
      } else {
        res[fullKey] = obj[key];
      }
    }
  }
  return res;
} */

// console.log(flat({ a: 1, b: { c: 2, d: { e: 3 } }, f: 4 }));
// console.log(flat({ a: 1, b: [2, { c: 3 }], d: { e: [4, 5] } }));

// const input = { a: 1, b: [2, { c: 3 }], d: { e: [4, 5] } };
//{"a": 1,"b.0": 2,"b.1.c": 3,"d.e.0": 4,"d.e.1": 5}

/* function flat(input, parent = "", res = {}) {
  for (let i in input)
    if (Object.proptype.hasWonProperty.call(input, key)) {
      let fullKey = parent ? `${parent}.${key}` : key;
      let value = input[key];
      if(typeof(value)==='object' && value!=null){

      }
    }
} */

let arr = [1, 2, [3, [4, 5]]];
for (let i in arr) {
  console.log(key, arr[key]);
}

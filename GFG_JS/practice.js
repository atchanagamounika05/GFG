/* Transforming complex data structures

Efficient data access

Grouping, filtering, mapping, reducing

Nested data manipulation

Immutability and performance considerations */

// 1. Basic array operations
// let tasks = ["Buy milk", "Walk dog", "Read book"];

// Add a task 'Pay bills' at the end.
// tasks.push("Pay bills");

// Remove 'Walk dog'.
// tasks.splice(1, 0);

// Add 'Workout' at the beginning.
// tasks.unshift("Workout");

// Print the number of tasks.
// tasks.length;

// 2. Basic Object Operations
/* let user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
}; */

// Change the user's email to "alice.new@example.com".
// user.email = "alice.new@example.com";

// Add a new key isPremiumUser and set it to true.
// user.isPremiumUser = true;

// Delete the age property.
// delete user.age;

// Print all keys and values in the object.
// console.log(Object.entries(user));

// 3.Array of Objects – Filtering and Mapping
/* let contacts = [
  { name: "John", phone: "1234" },
  { name: "Jane", phone: "5678" },
  { name: "Doe", phone: "9012" },
]; */

// Return a new array of just the contact names in uppercase.
// let res = contacts.map((contact) => contact.name.toUpperCase());
// console.log(res);

// Find the contact whose phone number is "5678".
// let res = contacts.filter((i) => i.phone === "5678");
// console.log(res);

// 4. Object Manipulation – Nested Objects
/* let product = {
  id: 101,
  title: "Laptop",
  price: 1200,
  specs: {
    cpu: "Intel i7",
    ram: "16GB",
    storage: "512GB SSD",
  },
}; */

// Change the storage to "1TB SSD".
// product.specs.storage = "1TB SSD";

// Add a new field in specs called gpu with value "NVIDIA GTX 1660".
// product.specs.gpu = "NVIDIA GTX 1660";

// Print all keys inside the specs object.
// console.log(Object.keys(product.specs));

// 5.Real World Scenario: Grouping by Property

/* let orders = [
  { id: 1, status: "shipped" },
  { id: 2, status: "pending" },
  { id: 3, status: "shipped" },
  { id: 4, status: "cancelled" },
  { id: 5, status: "pending" },
];

let res = orders.reduce(
  (acc, cur) => ((acc[cur.status] ||= []).push(cur), acc),
  {}
);
console.log(res); */

// 6.Advanced Array + Object: Merging Data - review
/* let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

let scores = [
  { userId: 1, score: 90 },
  { userId: 2, score: 85 },
]; */

/* [
  { id: 1, name: "Alice", score: 90 },
  { id: 2, name: "Bob", score: 85 },
]; */

/* function merge(arr1, arr2) {
  for (let i of arr1) {
    for (let j of arr2) {
      if (i.id === j.userId) {
        i.score = j.score;
      }
    }
  }
  return arr1;
}

console.log(merge(users, scores)); */

/* function merge(users, scores) {
  let scoreMap = new Map(scores.map(({ userId, score }) => [userId, score]));
  console.log(scoreMap);
  let res = users.map((user) => ({
    ...user,
    score: scoreMap.get(user.id),
  }));
  return res;
}
console.log(merge(users, scores)); */

// 7. Transform Employee Data - review needed

/* const employees = [
  { id: 1, name: { first: "Alice", last: "Brown" }, age: 30 },
  { id: 2, name: { first: "Bob", last: "Smith" }, age: 25 },
  { id: 3, name: { first: "Charlie", last: "White" }, age: 35 },
]; */

// { id: 1, fullName: "Alice Brown", age: 30 }
// let res = [];
// for (let i of employees) {
//   i.fullname = i.name.first + i.name.last;
//   delete i.name;
//   res.push(i);
// }
// console.log(res);
/* let res1 = employees.map((i) => ({
  id: i.id,
  fullname: i.name.first + " " + i.name.last,
  age: i.age,
})); */

// console.log(res1);

// 8. Unique Tags Extractor
/* const posts = [
  { id: 1, tags: ["tech", "ai", "javascript"] },
  { id: 2, tags: ["health", "tech", "fitness"] },
  { id: 3, tags: ["javascript", "web", "ai"] },
]; */
/*
let res = [];
for (let i of posts) {
  for (let j of i.tags) {
    if (!res.includes(j)) {
      res.push(j);
    }
  }
} */
// console.log(res);
/* 
let res1 = posts.reduce(
  (acc, cur) => (
    cur.tags.forEach((tag) => !acc.includes(tag) && acc.push(tag)), acc
  ),
  []
);
console.log(res1); */
/* let res2 = [
  ...posts.reduce((tagSet, curr) => {
    curr.tags.forEach((element) => tagSet.add(element));
    return tagSet;
  }, new Set()),
];
console.log(res2); */

// 9. Find Duplicate Users by Email
/* const users = [
  { id: 1, email: "alice@example.com" },
  { id: 2, email: "bob@example.com" },
  { id: 3, email: "alice@example.com" },
]; */
// Find all users with duplicate emails.
/* let res = users.reduce((acc, cur) => {
  (acc[cur.email] ||= []).push(cur);
  return acc;
}, {});
console.log(res); */

/* let res = Object.values(
  users.reduce((acc, cur) => {
    (acc[cur.email] ??= []).push(cur);
    return acc;
  }, {})
)
  .filter((i) => i.length > 1)
  .flat();

console.log(res); */

//10. Flatten Nested Object

/* const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
}; */

/* function flat(obj, parent = "", res = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let fullKey = parent ? `${parent}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        res = flat(obj[key], fullKey, res);
      } else {
        res[fullKey] = obj[key];
      }
    }
  }
  return res;
}
console.log(flat(obj)); */

//11.Invert Object Keys and Values
/* const obj = { a: "x", b: "y", c: "z" };
//{ x: "a", y: "b", z: "c" }
let res = Object.entries(obj).reduce(
  (acc, cur) => ((acc[cur[1]] = cur[0]), acc),
  {}
);

console.log(res); */

//12. Group Products by Category
/* const products = [
  { id: 1, name: "Shirt", category: "Clothing" },
  { id: 2, name: "Pants", category: "Clothing" },
  { id: 3, name: "Apple", category: "Grocery" },
  { id: 4, name: "Laptop", category: "Electronics" },
];

let res = products.reduce(
  (acc, cur) => ((acc[cur.category] ||= []).push(cur), acc),
  {}
);
console.log(res); */

//13. Sort an Array of Objects by Nested Value
/* const books = [
  { title: "Book A", ratings: { avg: 4.3 } },
  { title: "Book B", ratings: { avg: 3.9 } },
  { title: "Book C", ratings: { avg: 4.8 } },
];
let res = [...books].sort((a, b) => b.ratings.avg - a.ratings.avg);
console.log(res); */

//14. Merge Multiple Arrays of Objects by ID
/* const data1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const data2 = [
  { id: 1, score: 90 },
  { id: 2, score: 85 },
];
const data3 = [
  { id: 1, city: "New York" },
  { id: 2, city: "Paris" },
]; */

/* function merge(data1, data2, data3) {
  let mapObj1 = new Map(data2.map(({ id, score }) => [id, score]));
  let mapObj2 = new Map(data3.map(({ id, city }) => [id, city]));
  console.log(mapObj1);
  console.log(mapObj2);
  let res1 = data1.map((i) => ({
    ...i,
    score: mapObj1.get(i.id),
    city: mapObj2.get(i.id),
  }));
  return res1;
}

console.log(merge(data1, data2, data3)); */

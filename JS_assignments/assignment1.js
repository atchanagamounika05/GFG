let container = document.querySelector(".container");
// let products = [
//   {
//     id: "1",
//     item: "Shirt",
//   },
//   {
//     id: "2",
//     item: "Jeans",
//   },
//   {
//     id: "3",
//     item: "T-shirt",
//   },
//   {
//     id: "4",
//     item: "Denim Jacket",
//   },
//   {
//     id: "5",
//     item: "Casual Shoes",
//   },
// ];
// products.map((e) => {
//   let list = document.createElement("ul");
//   let button = document.createElement("button");
//   button.innerText = "clear";
//   button.name = e.item;
//   list.textContent = e.item;
//   container.appendChild(list);
//   container.appendChild(button);
//   button.addEventListener("click", (e) => {
//     if (e.target.name == list.innerText) {
//       list.innerText = null;
//       container.removeChild(button);
//     }
//   });
// });

/* let input = document.createElement("input");
let para = document.createElement("p");
let button = document.createElement("button");
button.innerText = "reverse";
container.appendChild(input);
container.appendChild(button);
input.addEventListener("input", (e) => {
  let value = e.target.value;
  para.innerText = value;
  container.appendChild(para);
  let reversedValue = value.split("").reverse().join("");
  button.addEventListener("click", (e) => {
    para.innerText = reversedValue;
  });
}); */

// 1. Group by status

// let orders = [
//   { id: 1, status: "shipped" },
//   { id: 2, status: "pending" },
//   { id: 3, status: "shipped" },
//   { id: 4, status: "cancelled" },
//   { id: 5, status: "pending" },
// ];
/* output:

{
  shipped: [ { id: 1, status: 'shipped' }, { id: 3, status: 'shipped' } ],
  pending: [ { id: 2, status: 'pending' }, { id: 5, status: 'pending' } ],
  cancelled: [ { id: 4, status: 'cancelled' } ]
} */

let orders = [
  { id: 1, status: "shipped" },
  { id: 2, status: "pending" },
  { id: 3, status: "shipped" },
  { id: 4, status: "cancelled" },
  { id: 5, status: "pending" },
];

// console.log(
//   orders.reduce(
//     (acc, e) => {
//       let status = e.status;
//       if(!acc[status]){
//         acc[status] = []
//       }
//       acc[status].push(e);
//       return acc;
//     },
//     {}
//   )
// );

//2.
// Input:
// let users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];

// let scores = [
//   { userId: 1, score: 90 },
//   { userId: 2, score: 85 },
// ];

// output:
// [
//   { id: 1, name: "Alice", score: 90 },
//   { id: 2, name: "Bob", score: 85 },
// ];

// result = [];
// for (let i of users) {
//   for (let j of scores) {
//     if (i.id == j.userId) {
//       i.score = j.score;
//     }
//   }
//   result.push(i);
// }

// 3;
// const employees = [
//   { id: 1, name: { first: "Alice", last: "Brown" }, age: 30 },
//   { id: 2, name: { first: "Bob", last: "Smith" }, age: 25 },
//   { id: 3, name: { first: "Charlie", last: "White" }, age: 35 },
// ];
//  { id: 1, fullName: "Alice Brown", age: 30 }

// let result = [];

// for (let e of employees) {
//   updated_obj = {
//     id: e.id,
//     fullName: e.name.first + " " + e.name.last,
//     age: e.age,
//   };
//   result.push(updated_obj);
// }

// 4. find duplicates by Email
//  users = [
//   { id: 1, email: "alice@example.com" },
//   { id: 2, email: "bob@example.com" },
//   { id: 3, email: "alice@example.com" },
// ];
//output:
/* {
  'alice@example.com': [
    { id: 1, email: 'alice@example.com' },
    { id: 3, email: 'alice@example.com' }
  ],
  'bob@example.com': [ { id: 2, email: 'bob@example.com' } ]
} */

// 5.
// const data1 = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];
// const data2 = [
//   { id: 1, score: 90 },
//   { id: 2, score: 85 },
// ];
// const data3 = [
//   { id: 1, city: "New York" },
//   { id: 2, city: "Paris" },
// ];

// o/p:

// [
//   { id: 1, name: 'Alice', score: 90, city: 'New York' },
//   { id: 2, name: 'Bob', score: 85, city: 'Paris' }
// ]

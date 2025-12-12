//assignment-1
// let products = [
//   { id: "1", item: "Shirt" },
//   { id: "2", item: "Jeans" },
//   { id: "3", item: "T-shirt" },
//   { id: "4", item: "Denim Jacket" },
//   { id: "5", item: "Casual Shoes" },
// ];

// let list = document.getElementById("productList");
// function renderProducts() {
//   list.innerHTML = "";
//   products.forEach((product) => {
//     const li = document.createElement("li");
//     li.textContent = product.item + " ";
//     const button = document.createElement("button");
//     button.textContent = "Remove";
//     button.addEventListener("click", () => removeButton(product.id));
//     /* button.onclick = function () {
//       removeProduct(product.id);
//     }; */
//     li.appendChild(button);
//     list.appendChild(li);
//   });
// }

// function removeButton(id) {
//   products = products.filter((product) => product.id !== id);
//   renderProducts();
// }

// renderProducts(list);

//assignment -2
// const container = document.getElementById("container");
// const inputElement = document.getElementById("input");

// const btn = document.createElement("button");
// btn.textContent = "Click me";
// container.appendChild(btn);

// const para = document.createElement("p");
// container.appendChild(para);

// inputElement.addEventListener("input", () => {
//   para.textContent = inputElement.value;
// });

// btn.addEventListener("click", () => {
//   para.textContent = inputElement.value.split("").reverse().join("");
// });

//assignment-3
/* const clothingStock = [
  {
    id: "1",
    color: "red",
    category: "men shirt",
    item: "Regular Fit Men Shirt",
    inStock: true,
  },
  {
    id: "2",
    color: "green",
    category: "women shirt",
    item: "Slim Fit Women Shirt",
    inStock: true,
  },
  {
    id: "3",
    color: "blue",
    category: "men shirt",
    item: "Oversized Men Shirt",
    inStock: false,
  },
  {
    id: "4",
    color: "yellow",
    category: "men tshirt",
    item: "Regular Fit Men Tshirt",
    inStock: false,
  },

  {
    id: "5",
    color: "magenta",
    category: "women jeans",
    item: "Ankle Lenght Women Jeans",
    inStock: true,
  },
  {
    id: "6",
    color: "yellow",
    category: "men shirt",
    item: "Casual Fit Men Shirt",
    inStock: true,
  },
  {
    id: "7",
    color: "green",
    category: "men jeans",
    item: "Carrot Fit Men Jeans",
    inStock: true,
  },
  {
    id: "8",
    color: "red",
    category: "women shirt",
    item: "Casual Fit Women Shirt",
    inStock: false,
  },
]; */

// Console all the different colors available for women's shirts

// let res = clothingStock.reduce(
//   (acc, cur) => (cur.category === "women shirt" && acc.push(cur.color), acc),
//   []
// );

// console.log(res);

//Console all the different colors available for men's shirts which are currently in stock.
/* let res = clothingStock.reduce(
  (acc, cur) => (
    cur.category === "men shirt" && cur.inStock && acc.push(cur.color), acc
  ),
  []
);
console.log(res); */

//Console an array which only contains the elements which are in stock.
/* let res = clothingStock.reduce(
  (acc, cur) => (cur.inStock && acc.push(cur), acc),
  []
);
console.log(res); */

//assignment-4
/* let list = [
  { value: "apple", text: "Apple" },
  { value: "grapes", text: "Grapes" },
  { value: "banana", text: "Banana" },
  { value: "guava", text: "Guava" },
];

const container = document.getElementById("container");
const dropdownEle = document.getElementById("dropdown-container");

const listOfItems = document.getElementById("favorites-list");

const select = document.createElement("select");
select.id = "dropdown";

list.forEach((opt) => {
  const option = document.createElement("option");
  option.value = opt.value;
  option.textContent = opt.text;
  select.appendChild(option);
});

console.log(select);

dropdownEle.appendChild(select);

let btn = document.createElement("button");
btn.textContent = "Add";
btn.addEventListener("click", addToFavorites);
container.appendChild(btn);
let favorites = new Set();
function addToFavorites() {
  let selectedValue = select.value;
  let selectedText = select.options[select.selectedIndex].text;

  if (!favorites.has(selectedValue)) {
    favorites.add(selectedValue);
    const li = document.createElement("li");
    li.textContent = selectedText;
    listOfItems.appendChild(li);
  } else {
    console.log("already in favorites");
  }
} */

//Assignment 5: Write a JavaScript program to highlight the word with more than 5 characters with green background

/* let container = document.getElementById("container");
let list = document.getElementById("list");
let arr = ["kiwi", "mitsuha", "taki", "Shinobu"];

arr.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  if (item.length > 5) {
    li.style.backgroundColor = "lightgreen";
  }
  list.appendChild(li);
}); */

// Assignment 6: Given a table with 3 rows and 3 columns Write a JavaScript program to add a row and every click on button.
/* let container = document.getElementById("container");
const tableBody = document.getElementById("table-body");

let btn = document.getElementById("add-button");

function clickHandler() {
  const tableRow = document.createElement("tr");
  let totalRows = document.querySelectorAll("#table-body tr").length;
  for (let i = 0; i < 3; i++) {
    const tableContent = document.createElement("td");
    tableContent.textContent = `Row ${totalRows} cell${i + 1}`;
    tableRow.appendChild(tableContent);
  }
  tableBody.appendChild(tableRow);
}

btn.addEventListener("click", () => clickHandler()); */

// Assignment 7: Write a javaScript function to protect email addresses. The part before ‘@’ should be clipped into half followed by 3 dots (...)
// let input = "shinobu.kochi@gmail.com";
// let res = input.split("@");
// // let str = res[0];
// let str = "shinobu.kochi";

// console.log(str);

// // let res1 = str.slice(0, -3) + "...";
// let arr = str.split("");
// arr.splice(-3, 3, "...");
// let res1 = arr.join("");
// console.log(res1 + "@" + res[1]);

//Assigment 8:  Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word’
// let Input = "     I am      a     Web    Developer   ";
//Output: IamaWebDeveloper
// let arr = Input.split("");
// let res = [];
// for (let i of arr) {
//   if (i !== " ") {
//     res.push(i);
//   }
// }
// console.log(res.join(""));
// let res = Input.replace(/\s+/g, "");
// console.log(res);
// console.log(Input.split(" ").join(""));

//Assignment 9: Given an object obj, we have to invert its key and value for each entry. Inversion will result in value being used as key and key as value.
/* let obj = { name: "Prakash", age: 111, hairColor: "black", likes: "food" };
console.log(Object.entries(obj));
let res = Object.entries(obj).reduce(
  (acc, cur) => ((acc[String(cur[1])] = cur[0]), acc),
  {}
);
console.log(res); */

//Assignment 10: Given an array of numbers, we have to find the number with the most frequency and return it. If there are two or more numbers with the same most frequency then return the biggest number.
// const numbers = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5];

// let res = numbers.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc;
// }, {});

// console.log(res);

// let res1 = Object.entries(res);
// console.log(res1);
// let res3 = res1.sort((a, b) => {
//   if (b[1] === a[1]) {
//     return b[0] - a[0];
//   }
//   return b[1] - a[1];
// });
// console.log(res3[0][0]);

// console.log(res3.at(-1)[0]);

// Assignment 11: Write a Javascript program to create a Rating Component.

/* const stars = document.getElementsByClassName("mySpan");
let currentRating = 0;
for (let i = 0; i < stars.length; i++) {
  const star = stars[i];
  const value = parseInt(star.dataset.value);
  star.addEventListener("mouseover", () => {
    handleHighlight(value);
  });
  star.addEventListener("mouseout", () => {
    handleHighlight(currentRating);
  });
  star.addEventListener("click", () => {
    currentRating = value;
    handleHighlight(currentRating);
    document.getElementById(
      "output"
    ).innerText = `you have rated ${currentRating}/5`;
  });
}

function handleHighlight(rating) {
  for (let i = 0; i < stars.length; i++) {
    if (i < rating) {
      stars[i].textContent = "★";
    } else {
      stars[i].textContent = "☆";
    }
  }
} */

// Assignment 12: Write a Prototype of subString Methods to find all the substring of a given string
// let str = "geeks";
// let res = [];

/* for (let i = 0; i < str.length; i++) {
  for (let j = i + 1; j <= str.length; j++) {
    console.log(i, j);
    res.push(str.slice(i, j));
  }
} */
/* String.prototype.allSubStrings = function () {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      let sub = this.slice(i, j);
      console.log(sub);
      if (sub.length <= str.length - i) {
        res.push(sub);
      }
    }
  }
  return res;
};
console.log([...new Set(str.allSubStrings())]); */

//Assignment 13: Add cars brand, model and year to the list
/* const container = document.getElementById("container");
const brand = document.getElementById("brand");
const model = document.getElementById("model");
const year = document.getElementById("year");

let brandValue = "";
let modelValue = "";
let yearValue = "";

brand.addEventListener("input", () => (brandValue = brand.value));
model.addEventListener("input", () => (modelValue = model.value));
year.addEventListener("input", () => (yearValue = year.value));

function saveFunction(e) {
  console.log(e.target.value);
}

function display() {
  const carDiv = document.createElement("div");
  carDiv.style.marginBottom = "10px";
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  p1.textContent = `Brand: ${brandValue}`;
  p2.textContent = `Model: ${modelValue}`;
  p3.textContent = `Year: ${yearValue}`;
  carDiv.appendChild(p1);
  carDiv.appendChild(p2);
  carDiv.appendChild(p3);
  container.appendChild(carDiv);

  (brand.value = ""), (model.value = ""), (year.value = "");
  brandValue = modelValue = yearValue = "";
}

const btn = document.getElementById("save");
btn.addEventListener("click", () => display()); */

//assignment 14: Sort Products By Price
/* const initialData = [
  {
    id: 1,
    item: "shirt",
    price: 300,
  },
  {
    id: 2,
    item: "tshirt",
    price: 499,
  },
  {
    id: 3,
    item: "jeans",
    price: 500,
  },
  {
    id: 4,
    item: "trousers",
    price: 250,
  },
  {
    id: 5,
    item: "chinos",
    price: 300,
  },
];

let res = initialData.sort((a, b) => b.price - a.price);
console.log(res); */

// Assignment 15: Update Price of a Product by using it’s Id
/* const initialData = [
  {
    id: 1,
    item: "shirt",
    price: 300,
  },
  {
    id: 2,
    item: "tshirt",
    price: 499,
  },
  {
    id: 3,
    item: "jeans",
    price: 500,
  },
  {
    id: 4,
    item: "trousers",
    price: 250,
  },
  {
    id: 5,
    item: "chinos",
    price: 300,
  },
];

const list = document.getElementById("list");
function display(initialData) {
  for (let i = 0; i < initialData.length; i++) {
    let li = document.createElement("li");
    li.textContent = `id: ${initialData[i].id} :: ${initialData[i].item} :: ${initialData[i].price}`;
    list.appendChild(li);
  }
}

let input1 = document.getElementById("idEle");

let input2 = document.getElementById("price");

const btn = document.getElementById("submit");
btn.addEventListener("click", () => handleClick());
function handleClick() {
  let input1Value = input1.value;
  let input2Value = input2.value;
  initialData.forEach((prod) => {
    if (prod.id === +input1Value) {
      prod.price = +input2Value;
    }
  });
  input1.value = "";
  input2.value = "";
  list.innerHTML = "";
  display(initialData);
}
display(initialData); */

//Assignment 16: Increase/Decrease Price of a Product

let price = document.getElementById("price");
price.textContent = "price: 100";
price.value = 100;
let currentValue = 0;
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
let total = document.getElementById("total");
total.textContent = 0;
let count = document.getElementById("count");
count.textContent = `count: ${currentValue}`;
total.textContent = `total: ${currentValue * +price.value}`;
incrementBtn.addEventListener("click", () => add());
function add() {
  currentValue = currentValue + 1;
  count.textContent = `count: ${currentValue}`;
  total.textContent = `total: ${currentValue * +price.value}`;
}

decrementBtn.addEventListener("click", () => sub());
function sub() {
  if (currentValue > 0) {
    currentValue = currentValue - 1;
    count.textContent = `count: ${currentValue}`;
    total.textContent = `total: ${currentValue * +price.value}`;
  } else {
    console.log("select the items");
  }
}

// const allmodules = require("./utill");
//const { print, greet } = require("./utill");// commonJS
// import modules from "./utill";
// const { greet, print } = modules;

// import { greet, print } from "./utill.js";
// console.log(allmodules);
// print(greet("any"));

const required = true;
if (required) {
  const { add } = await import("./math.js");
  console.log(add(2, 2));
}

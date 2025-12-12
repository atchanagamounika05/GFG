export function greet(name) {
  //named export
  return `hello ${name}`;
}

export function print(value) {
  console.log(value);
}

//commonJs
/* module.exports = {
  greet,
  print,
}; */

//ES6
// export default {
//   greet,
//   print,
// };

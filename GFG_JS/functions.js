//pure functions
//input same output same for every execution - no dependancy on outer vars
//no mutating params, not change original parameters

// function double(arg) {
//   return arg * 2;
// }

// console.log(double(5));

// functions can be used in same way as integers, strings and objects

//function as var

// const greetFun = function () {
//   return "hai";
// };
// console.log(greetFun());

//function as argument

function argFun() {
  return "as Developer";
}

function getFun(name, argFunc) {
  console.log(name, argFunc());
}

getFun("Mounika", argFun);

//function as return

/* function nezuko() {
  return function () {
    console.log("hai");
  };
}
nezuko()(); */

//Higher order function
/* let arr = [1, 12, 3, 4, 5];
function calc(arr, n) {
  let res = [];
  for (let i of arr) {
    res.push(i * n);
  }
  return res;
}
console.log(calc(arr, 5)); */

/* let arr = [1, 2, 3, 4, 5];
function squareFun(num) {
  return num ** 2;
}

function cubeFun(num) {
  return num ** 3;
}

function quadFun(num) {
  return num ** 4;
}

function calc(arr, func) {
  const res = [];
  for (let i of arr) {
    console.log(i);
    res.push(func(i));
  }
  return res;
} */

// const sqr = calc(arr, squareFun);
// console.log(sqr);

// const cube = calc(arr, cubeFun);
// console.log(cube);
// const quad = calc(arr, quadFun);
// console.log(quad);

//Map - filter - reduce
let arr = [1, 2, 3, 4, 5];
// map - runs a callback func for each ele in the array
/* const squareFun = (num) => {
  return num ** 2;
};

const res = arr.map(squareFun);
console.log(res); */
/* console.log(
  arr.map((num, index) => {
    console.log(index);
    return num ** 2;
  })
); */
// console.log(arr.map((num) => num ** 2));

//filter

/* function calc(arr) {
  let res = [];
  for (let i of arr) {
    if (i % 2 === 0) {
      res.push(i);
    }
  }
  return res;
}
console.log(calc(arr)); */

// console.log(arr.filter((i) => i % 2 === 0));

//reduce - callback func and intial value

/* function reducerFun(acc, cur) {
  return acc + cur;
}

const res = arr.reduce(reducerFun, 0);
console.log(res); */

// console.log(arr.reduce((acc, cur) => acc + cur, 0));

//arguments object
// arguments - default array like obj(can loop over) convert to array and apply array methods
// if function has default parameters with intitialzed values updated arguments[1] doesn't effect the parameter value

/* function calc(a, b) {
  // console.log(a + b);//7
} */

/* function calc() {
  console.log(arguments);
  console.log([...arguments].reduce((acc, curr) => acc + curr, 0));
} */

// Parameters: are part of the function's definition.
// Arguments: are part of the function's invocation.
// with out parameters in functions
/* function calc() {
  arguments[1] = 10;
  console.log(arguments);
} */

// with  parameters in functions
//argument value > default parameter value - 3
//updated argument value still takes passed argument value - 3
//remove default parameter value
/* function calc(a) {
  a = 100;
  console.log(a);
  console.log(arguments);
  arguments[0] = 10;
  console.log(arguments);
  console.log(a);
}

calc(3); */
// calc(3, 4, 5, 6, 7, 8);

//rest parameters
/* function calc(a, b, ...rest) {
  console.log(rest);
}
calc(3, 4, 5, 6, 7, 8); */

//global variables - global scope - access any where
//variables inside function - local scope - not accessable outside the function
//var - global scope
//let,const - block scope
// var is global scoped even if we use them in block {...} still accessable outside of the block but not outside of the function
// let wont work like var, its get killed out of the block as it is block scoped
//let as global variable saved in script
/* var x = 3; //global scope
function show() {
  var y = 2; // local
  console.log({ x });
}
show(); */
// console.log({ y }); // y died as function execution done already

//block scope
/* {
  let a = 10; //❌ - block scope variable cant access out side block scope
  var b = 20; //✅ - Global scope variable - can access outside of block scope
} */
//local scope
//let x= 6 script
/* function x() {
  var a = 10; //❌ local scope cant access outside function
  var b = 20; //❌
}
console.log(a);
console.log(b); */

//scope scope chain

//global scope
/* let a = 10;
let b = 20;
let c = 30;
function x() {
  //parent of y
  // let b = 20;
  console.log({ a });
  function y() {
    // parent of z
    // let c = 30;
    console.log({ b });
    function z() {
      console.log({ c });
    }
    z();
  }
  y();
}
x(); */

//recursion - call a function itself

//iterative approach
/* function calcSum(num) {
  let res = 0;
  for (let i = 1; i <= num; i++) {
    console.log(i);
    res += i;
  }
  return res;
}
console.log(calcSum(10)); */

//recursive approach

/* function calcSum(num) {
  if (num == 1) return num;
  return num + calcSum(num - 1);
}
console.log(calcSum(10)); */

// Fibnacci n* n-1

//iterative approach
/* function fib(n) {
  console.log(n);
  let res = 1;
  for (let i = n; i >= 1; i--) {
    res = res * i;
  }
  return res;
}
console.log(fib(5)); */

//recursive approach
function fib(n) {
  if (n === 1) return n;
  return n * fib(n - 1);
}
console.log(fib(5));

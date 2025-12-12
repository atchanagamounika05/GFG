//Array -  mutable non primitive

let students = ["Nezuko", "Tanjiro", "Zenitsu", "Inosuke"];
// for (let i of students) {
//   console.log(i);
// }

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// students.push("Rengoku", "Aoi");

// students.pop();
// students.shift();
// students.unshift("Nezuko-chan");
// console.log(students);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];

// let arr4 = arr1.concat(arr2);
// console.log(arr4);
// let arr5 = arr1.concat(arr2, arr3);
// console.log(arr5);

// let arr5 = arr4.concat(arr3);
// console.log(arr5);

//slice(start,end) - remove ele from start to end and doesn't modify the original array, returns the deleted elements in the array
// let arr = [0, 1, 2, 3, 4, 5];
// console.log(arr.slice(3, 4));
// console.log(arr);

//Splice(start,len) - used to delete or inserts elements in the arr, modifies original arr and returns values in the arr
// let arr = [0, 1, 2, 3, 4, 5];
//delete
// console.log(arr.splice(2, 2));
// console.log(arr);
//add
// console.log(arr.splice(2, 0, "react js"));
// console.log(arr);

// const animes = ["Death Note", "Naruto", "onepiece", "AOT", "Demon Slayer"];
// const rl = require("readline-sync");
// const favAnime = rl.question("fav anime?");
// console.log(animes.includes(favAnime));

//sort - change numbers to strings and compare with UTF-16 code - sorts the elements in place original array changes
// const t = [1, 5, 4, 3, 2];
// const sent = ["carrot", "keera", "beetroot"];
// console.log(t.sort());
// console.log(t);
// console.log(sent.sort());
// const t = ["10", "100", "20", "30"];
// console.log(t.sort()); // UTF sort
// console.log(t.sort((a, b) => a - b)); // numerical sort - ascending
// console.log(t.sort((a, b) => b - a)); // desending
//split-join
//split- string method join- array method
//reverse
// let text = "madam";
// console.log(text.split("").reverse().join(""));

// spread - unpacking , concat
// let arr1 = [1, 2, 3, 4];
// let arr2 = [7, 8];
// console.log(...arr); //1 2 3 4
// let arr3 = [...arr1, 5, 6, ...arr2];
// console.log(arr3);

//destructuring
// let [a, b, c] = [1, 2, 3];
// console.log(a);
// console.log(b);
// console.log(c);

// let a = 10;
// let b = 20;

// [a, b] = [b, a];

// console.log(a, b);

//copy by reference
//arr1, arr2 points to same memory
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// console.log(arr2);
// arr2.push(5);
// console.log(arr1);
// console.log(arr2);

//spread
// let arr2 = [...arr1];
// arr2.push(5);
// console.log(arr1);
// console.log(arr2);

// for loop
// let arr2 = [];
// for (let i of arr1) {
//   arr2.push(i);
// }
// arr2.push(5);
// console.log(arr2);

// console.log(arr1);
// console.log(arr2);
//----------------------------------------------------------------------
//Javascript.info
//at() method is used to access elements in an array by their index
// console.log(arr1[arr1.length - 1]);
// console.log(arr1.at(-1));

//pop/push shift/unshift
//Queue - FIFO
// shift <- |||| <- push
//display the messages first sent

//stack - LIFO
//  pop ^| |push
//      ------

//queue+stack = deque

//array end operations - push/pop
//push = arr.push() add ele or arr[arr.length]
//pop = arr.pop() - removes last ele in the array or arr.at(-1)

//array beginning operations -  shift/unshift
//shift - remove first ele
//unshift - add ele to first

//push and shift add multiple element at once

//Array is an object

//length - To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.
// let arr = [];
// arr[123] = "apple";
// console.log(arr.length);

//If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);
// arr.length = 2;
// console.log(arr);
// arr.length = 10;
// console.log(arr);

// new Array(size) - fill with undefined by default
// let arr = new Array(2);
// console.log(arr);

//multi dimentional arrays
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[2][2]);

//toString - arrays has its own implementation,  comparison makes [] ---> ""
// let arr = [1, 2, 3];
// console.log(String(arr) === "1,2,3");
// console.log([] + 1);
// console.log(typeof ([] + 1));
// console.log([1] + 1);
// console.log([1, 2] + 1);
// Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".
// console.log([] == "");

// console.log([] == []); //false
// console.log([0] == [0]); //false
//These arrays are technically different objects. So they aren’t equal. The == operator doesn’t do item-by-item comparison.

// console.log(0 == []); // [] converts to primitive data type "" as 0 is primitive false==false // true
// console.log("0" == []); // false as string has a value 0 -> true==false //false

//<------------ tasks --------->

// task 1
// let arr = ["Jazz", "Blues"];
// arr.push("Rock-n-Roll");
// arr[Math.floor(arr.length / 2)] = "Classics";
// console.log(arr.shift());
// arr.unshift("Rap", "Reggae");
// console.log(arr);

// task 2
// let arr = ["1", "2"];
// arr.push(function () {
//   console.log(this);
// });

// arr[2]();

//task 3
//[-1, 2, 3, -9] - 5
// function getMaxSubSum(arr) {
//   let sum = 0;
//   let maxSum = 0;
//   for (let i of arr) {
//     sum += i;
//     maxSum = Math.max(sum, maxSum);
//     if (sum < 0) {
//       sum = 0;
//     }
//   }
//   console.log(maxSum);
// }
// getMaxSubSum([-1, 2, 3, -9, 11]);

// GFG tasks

/* function isSorted(arr) {
  let flag = true;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length - 1; i++) {
      console.log(arr[i] < arr[i + 1]);
      if (arr[i] > arr[i + 1]) {
        flag = false;
      }
    }
  }
  return flag;
}a
console.log(isSorted([1, 2, 3, 5, 4]));
 */
// let arr = [1, 2, 3];
// arr[24] = "hai";
// console.log(arr.at(-1));
// console.log(arr.indexOf(arr.at(-1)) + 1);
// console.log(arr.length);

// splice vs slice

//syntax:
//slice: slice(startIndex, endIndex) removes the elements excluding endIndex and
//splice: splice(startIndex, length, endIndex)

//values - both allows negative values

//return
// slice: return the deleted elements
//splice: return insert, delete, modified the elements

//modification
//slice: doesnt modify the original array
//splice: modifies the original array

//methods
//slice - works on arrays and strings
//splice - only work on arrays

// split("") -  apply on string to make it an array - string method
// join("") - apply on array to make back to string - array method

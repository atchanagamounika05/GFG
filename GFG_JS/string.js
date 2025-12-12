//Strings - immutable can't change

//of - each character in the sentence/word

// let sentence = "This is vs code";
// for (let char of sentence) {
//   console.log(char);
// }

//[i] - indexing
let word = "zenitsu";

/* console.log(word[3]); */
// for (let i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }

// let vowels = "aeiou";
// let res = "";
// for (let i = 0; i < word.length; i++) {
//   if (vowels.includes(word[i])) {
//     res += word[i] + " ";
//   }
// }
// console.log(res);

// console.log(word.toUpperCase());
// console.log(word.toLowerCase());

// console.log(word[-2]); // undefined
// console.log(word.at(-2)); //at can access in reverse order, allowing -ve values

//immutable
// let str = "hi";
// str[0] = "H";
// console.log(str);

// str = "H" + str[1];
// console.log(str);

//indexOf(subStr,pos) // pos/-1
// console.log(text.length);
// console.log(text.indexOf("h", 2));

// let text = "photoshoot";
// target = "o";
// let res = [];
//return all the occurances of 'o'
/* pos = 0;
while (true) {
  let findpos = text.indexOf(target, pos);
  if (findpos == -1) break;
  res.push(findpos);
  console.log("findpos", findpos); 
  pos = findpos + 1;
}
console.log(res) - [2,4,7,8]  
*/
// let res = "";
// pos = -1;
// while ((pos = text.indexOf(target, pos + 1)) !== -1) {
//   res += pos + " ";
// }
// console.log(res); // 2 4 7 8

//lastIndexOf(subStr,pos) - search from last reverse order of string
// let text = "photoshoot";

// console.log(text.lastIndexOf("o", 6));

//includes, startsWith, endsWith
//console.log(text.includes("s", 8)); from position

// console.log(text.startsWith("ph"));
// console.log(text.endsWith("ot"));

//getting substring - slice, substring, substr
// method	                    selects…	                                negatives
// slice(start, end)	    from start to end (not including end)	      allows negatives
// substring(start, end)	between start and end (not including end) 	negative values mean 0 start>end auto swap
// substr(start, length)	from start get length characters	          allows negative start
//no second arg - end consider at the end
//let text = "programming";
// console.log(text.slice(2, 6));
// console.log(text.slice(-4, -2));
// console.log(text.substring(6, 2));
// console.log(text.substring(-6, 2));
//console.log(text.substr(2, 5)); // deprecated

//comparison str - UTF-16

// console.log("a" > "Z");

// codePointAt(pos)

// console.log("Österreich" > "Zealand");
// let text1 = "Österreich"; //214
// let text2 = "Zealand"; //90
// console.log("z".codePointAt(0)); //122
// console.log("Z".codePointAt(0)); //90
// console.log("z".codePointAt(0).toString(16)); //7a // in hexadecimal;

//String.fromCodePoint(code)

// console.log(String.fromCodePoint(214));
// console.log(String.fromCodePoint(0x7a)); // z - also accepts hex value

// let str = "";
// for (let i = 65; i <= 96; i++) {
//   str += String.fromCodePoint(i);
// }
// console.log(str);

// charCodeAt, fromCharCode;
// The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

// The call str.localeCompare(str2) returns an integer indicating whether str is less, equal or greater than str2 according to the language rulesIf you want the entire code point value, use codePointAt().
//To compare strings according to the language, use: localeCompare, otherwise they are compared by character codes.
/* let str1 = "bye";
let str2 = "bye";
console.log(str1.localeCompare(str2)); */
//str1>str2 = 1
//str1<str2 = -1
//str1=str2 = 0

//task- 1
/* function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("hello")); */

/* let spam = ["viagra", "XXX"];

//task - 2
function checkSpam(sentence) {
  let res = false;
  sentence = sentence.split(" ");
  for (let i in sentence) {
    if (spam.includes(sentence[i].toLowerCase())) {
      res = true;
      break;
    }
  }
  return res;
}
console.log(checkSpam("innocent rabbit")); */

/* function spamCheck(str) {
  let lower = str.toLowerCase();
  return lower.includes("viagra") || lower.includes("XXX");
}
console.log(spamCheck("buy ViAgRA now")); */

//task - 3
/* function truncate(str, len) {
  console.log(len);
  if (str.length > len) {
    // return str.slice(0, len - 1) + "...";
    return str.substring(0, len - 1) + "...";
  }
  return str;
}

let res = truncate("What I'd like to tell on this topic is:", 20);
console.log(res); */
// console.log(res.length);
// console.log(truncate("Hi everyone!", 20));

//task - 4
/* function currency(value) {
  return value.slice(1);
}
console.log(currency("$120")); */

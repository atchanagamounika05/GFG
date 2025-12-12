function occurance(arr) {
  let res = 0;
  if (arr.length === 1) {
    return res;
  }
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[res]);
    if (arr[i] > arr[res]) {
      res = i;
    }
  }
  return res;
}
let arr = [10, 20, 40, 30, 40];
console.log(occurance(arr));

//time: O(n)
//space: O(n)

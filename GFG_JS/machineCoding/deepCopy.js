let obj = {
  name: "Mounika",
  id: 13,
  address: {
    location: "Hyd",
    area: "Gachibowli",
  },
};

/* const copiedObj = { ...obj };
copiedObj.name = "Shinobu";
copiedObj.address.location = "pune"; // changes obj along with copiedObj
console.log(obj);
console.log(copiedObj); */

function getCopiedObj(source) {
  let res = {};
  let keys = Object.keys(source);
  for (let key of keys) {
    console.log(key);

    if (typeof source[key] === "object") {
      console.log("-------");
      res[key] = getCopiedObj(source[key]);
      console.log(res[key]);
    } else {
      res[key] = source[key];
    }
  }
  return res;
}

let copy = getCopiedObj(obj);
/* copy.name = "Shinobu";
copy.address.area = "madhapur";
/*console.log(obj);
console.log(copy); */

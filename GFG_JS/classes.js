//prototype
//prototype inheritance

/* const isLoggedIn = {
  loggedIn: true,
}; */

/* const isAdmin = {
  isAdmin: true,
  __proto__: isLoggedIn,
  display() {
    console.log(`is ${this.name} admin ? :${this.isAdmin}`); // class methods are not direct properties for class those are added in prototype section
  },
}; */
// const user = {
//   name: "Zoro",
//   age: 13,
//   __proto__: isAdmin, // added to prototypes of User
//   //__proto__: isLoggedIn, // Duplicate __proto__ fields are not allowed in object literals
//   /* display() {
//     console.log(`${this.name} is ${this.age} old`); // class methods are not direct properties for class those are added in prototype section
//   }, */
// };
// console.log(user);
// console.log(user.age);
// console.log(user.age.toString()); //toString is a not direct property of user but still accessed from object prototype - propotype inheritance
// console.log(user.isAdmin); // first check in user object not found then search in prototypes found and imported
// console.log(user.loggedIn); // inheritance from nested prototypes
// user.display(); // checks in own prototype if not search in child prototypes
// console.log(Object.keys(user)); //name, age
// //get all the keys from nested prototype too - use for in
// for (let i in user) {
//   console.log(i);
// }

//classes
/* class Movie {
  constructor(name, hero, budget) {
    this.name = name;
    this.hero = hero;
    this.budget = budget;
  }
  display() {
    console.log(`${this.name} mve is good`);
  }
}

let mve1 = new Movie("Susume", "Taki", "2");

let mve2 = new Movie("Inifite castle", "Tanjiro", "5");

let mve3 = new Movie("Your name", "mitsuha", "3");

console.log(mve1.name);
mve1.display();
mve2.display();
mve3.display(); */

// class inheritance

/* class Parent {
  constructor(name, father, mother) {
    this.name = name;
    this.father = father;
    this.mother = mother;
  }
  display() {
    console.log(`${name} is son of ${father} and ${mother}`);
  }
}

class Child extends Parent {
  constructor(name, father, mother, sibling) {
    super(name, father, mother);
    this.sibling = sibling;
  }
  display() {
    console.log(`${this.name}'s sibling is ${this.sibling}`);
  }
}

const c1 = new Child("Dhritarastra", "vichirtravirya", "Ambika", "Pandu");
const c2 = new Child("Pandu", "vichirtravirya", "Ambalika", "Dhritarastra");
// console.log(c1.name);
// c1.display();
console.log(c2.name);
c2.display(); */

//static properties

/* class Children {
  static id = 1;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.id = Children.id++;
  }
  static sortByAge(a, b) {
    return a.age - b.age;
  }
}
const c1 = new Children("Tanjiro", 15);
const c2 = new Children("Nezuko", 10);
const c3 = new Children("Zenitsu", 13);

let arr = [c1, c2, c3];
// console.log(arr.sort((c1, c2) => c1.age - c2.age));
console.log(arr.sort(Children.sortByAge)); */

//private
/* class User {
  #id = 123;
  change(id) {
    this.#id = id;
    console.log(this.#id);
  }
}
const u1 = new User();

// u1.#id = 321; // Private field '#id' must be declared in an enclosing class
// console.log(u1.id);
u1.change(321); */

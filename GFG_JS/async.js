//callbacks
// passing function as argument to other function, passed argument function is callback function
// async actions - settimeout, fetch
/* function a(b) {
  console.log("hai");
  b();
}

function b() {
  console.log("hello");
}

a(b); */

/* setTimeout(function callback() {
  return console.log("hai");
}, 3000); */

/* fetch("endpoint").then(function () {
  //response logic
}); */

/* const btn = document.createElement("button");
btn.addEventListener("click", function () {
  console.log("clicked");
});
const container = document.getElementById("btnContainer");
container.appendChild(btn); */

// callback hell
// pyramid of doom // code grows horizontally
//inversion of control // too much of depandancy on parent functions

//book a hotel -> proceed to payment -> update payment status -> update history

/* bookHotel(hotelId, function () {
  if (error) {
    handleError(error);
  } else {
    proceedToPayment(hotelId, function () {
      if (error) {
        handleError;
      }else{
        updatePaymentStatus(hotelId, transactionId, function(){
            if(error){
                handleError
            }else{
                updateHistory(sucessstatus){
                    if(error){
                        handleError
                    }else{
                        console.log("success")
                    }
                }
            }
        })
      }
    });
  }
}); */

//promise
//promise -> pending , fullfill, rejected
//response -> value,error
/* const url = "https://jsonplaceholder.typicode.com/postes";

let promise = fetch(url);
promise
  .then(function (data) {
    return data.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log("err", err);
  }); */

//create promise
/* let isCallSuccess = false;
let data = [
  { id: 1, name: "hello" },
  { id: 2, name: "hai" },
];
let promise = new Promise((resolve, reject) => {
  if (isCallSuccess) {
    setTimeout(() => resolve(data), 3000);
  } else {
    let error = new Error("Something went wrong");
    reject(error.message);
  }
});

promise
  .then(() => console.log(data))
  .catch(function (error) {
    console.log(error);
  }); */

//promise chaining
/* function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ userId: 1 }), 1000);
  });
}

function fetchPosts(user) {
  return new Promise((resolve, reject) => {
    console.log(`fetching posts for user ${user.userId}`);
    setTimeout(() => resolve(["post1", "post2"])), 1000;
  });
}

function fetchComments(posts) {
  return new Promise((resolve, reject) => {
    console.log(`fetching comments for ${posts.length} posts`);
    setTimeout(() => resolve(["comment1", "comment2"])), 1000;
  });
}

fetchUser()
  .then((user) => fetchPosts(user))
  .then((posts) => fetchComments(posts))
  .then((comments) => console.log(comments))
  .catch((err) => console.log("something went wrong")); */

//promise.all - finish all tasks, return all succeess no? last rejected single

/* let promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("promise1 resolved "), 3000)
);
let promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("promise2 resolved"), 2000)
);
let promise3 = new Promise((_, reject) =>
  setTimeout(() => reject("promise3 rejected"), 1000)
);
let promise4 = new Promise((_, reject) =>
  setTimeout(() => reject("promise4 rejected"), 2000)
); */

/* let promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("promise3 resolved"), 2000)
);
let promise4 = new Promise((resolve) =>
  setTimeout(() => resolve("promise4 resolved"), 1000)
); */

/* promise1.then((data) => console.log(data));
promise2.then((data) => console.log(data));
promise3.then((data) => console.log(data));
promise4.then((data) => console.log(data)); */

/* let arr = [promise2, promise3, promise1, promise4];
let promise = Promise.all(arr);
promise.then((data) => console.log(data)).catch((err) => console.log(err)); */

// let ids = [1, 2];
/* const url = "https://jsonplaceholder.typicode.com/posts";
let promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
promise1.then((res) => res.json()).then((res) => console.log(res)); */
/* let arr = ids.map((id) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
);
let promise = Promise.all(arr);

promise
  .then((res) => Promise.all(res.map((res) => res.json())))
  .then((res) => console.log(res)); */

//promise.allsettle
//wait for all the promises to be settled and return status, value on resolve, reason for reject
/* let promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("promise1 resolved "), 3000)
);
let promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("promise2 resolved"), 2000)
);
let promise3 = new Promise((_, reject) =>
  setTimeout(() => reject("promise3 rejected"), 1000)
);
let promise4 = new Promise((_, reject) =>
  setTimeout(() => reject("promise4 rejected"), 2000)
);

let arr = [promise1, promise2, promise3, promise4];

let promise = Promise.allSettled(arr);
promise.then((res) => console.log(res)); */

// Promise.race() - first settled promise(resolve/reject) win
//primise.any() - first resolved promise win

/* let promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("promise1 resolved "), 1000)
);
let promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("promise2 resolved"), 2000)
);
let promise3 = new Promise((_, reject) =>
  setTimeout(() => reject("promise3 rejected"), 3000)
); */

// let arr = [promise1, promise2, promise3];
/* let promise = Promise.race(arr);
promise.then((res) => console.log(res)).catch((err) => console.log(err));
 */
/* let promise = Promise.any(arr);
promise.then((res) => console.log(res)); */

//async - await
//async always returns a promise
/* async function show() {
  return "hello";
}

let res = show();
console.log(res); */

//no use of aysnc
/* async function display() {
  let promise = new Promise((res) => console.log("promise resolved"));
  return promise;
}
let result = display();
result.then((res) => console.log(res));
 */

/* async function fetchData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();
  return data;
}
fetchData().then((res) => console.log(res)); */

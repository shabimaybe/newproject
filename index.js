// if (true) {
//   var a = 10;
// }
// console.log("a", a);

// if (true) {
//   let b = 10;
//   console.log("b", b);
// }

// // hoisting
// // so
// // JavaScript only hoists declarations, not initializations

// console.log("c", c);
// var c = 34; // as we now its give undefine

// //  but when we declare first and initialize after its use 
// // then it hoisted 
// x =5;
// console.log("this is hoisting",x);
// var x;

// //

// let d = 35;
// console.log("d", d);

// // array

// console.log("starting Array");

// const arr = [1, 2, 3, 4, 5];
// console.log(arr[2]);
// // console.log(arr.length);
// arr[2] = 10; //  at 2 index

// arr.push(6); // add at end of array
// // console.log(arr);

// // split and join

// let str = "Shoaib";
// const newArr = str.split("");
// // console.log(newArr);

// // event loop

// console.log("Start");

// setTimeout(() => {
//   console.log("Inside setTimeout");
// }, 0);

// console.log("End");

// // async callback

// function getUser(id, callback) {
//   setTimeout(() => {
//     const user = {
//       id: id,
//       name: "Shoaib",
//     };
//     callback(user);
//   }, 2000);
// }

// getUser(1, (user) => {
//   console.log(user);
// });

// const person = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//     "Java",
//   ],
//   isMarried: true,
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   },
// };

// //   console.log(person.getFullName());

// const copyPerson = Object.assign({}, person);
// // console.log(copyPerson)

// const keys = Object.keys(copyPerson);
// // console.log(keys);  //it give keys of object

// // const values = object.values(copyPerson);

// // console.log(values);

// // callback or higher order function

// const callback = (n) => {
//   return n * n;
// };

// function cube(callback, n) {
//   return callback(n) * n;
// }

// const result = cube(callback, 3);

// console.log(result);

// // filter

// const people = [
//   { name: "Ali", age: 20 },
//   { name: "Shoaib", age: 23 },
// ];

// const doubleAge = people.map((person) => person.name);

// // console.log(doubleAge);

// const overTwenty = people.filter((person) => person.age > 20);

// // console.log(overTwenty);

// // complex

// const users = [
//   { id: 1, name: "Alice", age: 28, country: "USA" },
//   { id: 2, name: "Bob", age: 32, country: "Canada" },
//   { id: 3, name: "Charlie", age: 25, country: "UK" },
//   { id: 4, name: "David", age: 30, country: "USA" },
//   { id: 5, name: "Emma", age: 22, country: "Australia" },
// ];

// const userInfo = users

//   .filter((user) => user.age < 30)
//   .map(({ name, age, country }) => `${name}(${age}), ${country}`);

// console.log(userInfo);

// const usaUserInfo = users.filter((user) => user.country == "USA");
// console.log(usaUserInfo);

// // Closure

// // JavaScript allows writing function inside an outer function. We can write as
// // many inner functions as we want. If inner function access
// // the variables of outer function then it is called closure.

// function outerFunction() {
//   let count = 0;
//   function innerFunction() {
//     count++;
//     return count;
//   }

//   return innerFunction;
// }
// const innerFunc = outerFunction();

// // console.log(innerFunc())
// // console.log(innerFunc())
// // console.log(innerFunc())

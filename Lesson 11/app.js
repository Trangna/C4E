// //localStorage

// //create new values in localStorage: save with values and key
// // localStorage.setItem("name", "A");
// // localStorage.setItem("address", "VN");
// // localStorage.setItem("weight", 70);

// // //to update value for another key
// // localStorage.setItem("name", "B");

// // // if no value found, return null, otherwise, return string value
// // const value = localStorage.getItem("weight");
// // console.log(value + 10);

// // localStorage.setItem("favorites", ["a", "b", "c", "d"]);
// // localStorage.setItem("pet", { type: "cat", name: "Bob", age: 2 });
// // const favorites = localStorage.getItem("favorites");
// // console.log(favorites);
// // const pet = localStorage.getItem("pet");
// // console.log(pet);

// const favorites = ["money", "sleeping", "girls"];
// let pet = { type: "cat", name: "Bob", age: 2 };
// const users = [
//   { id: 1, name: "A", username: "user_a", password: "12345678" },
//   { id: 2, name: "B", username: "user_b", password: "1234345678" },
// ];

// //convert/transform object | array => string
// const favoritesJSON = JSON.stringify(favorites);
// console.log(favoritesJSON);

// const petJSON = JSON.stringify(pet);
// console.log(petJSON);

// //save users in localStorage

// const usersJSON = JSON.stringify(users);// convert users => json
// localStorage.setItem("users", usersJSON);
// console.log(usersJSON);

// //convert/transform string(json) => object | array

// // const newPet = JSON.parse(petJSON);
// // console.log(newPet); //different from above pet - 2 different objects

// const value = localStorage.getItem('users')
// const newUsers = JSON.parse(value);
// console.log(newUsers); //different from above users - 2 different arrays
const $seconds = document.getElementById("seconds");
const $startTimerBtn = document.getElementById("start-timer-btn");
const $pauseTimerBtn = document.getElementById("pause-timer-btn");
const $resetTimerBtn = document.getElementById("reset-timer-btn");

let timer = null;
$startTimerBtn.onclick = () => {
  timer = setInterval(() => {
    let value = $seconds.innerHTML;
    $seconds.innerHTML = value - 1; //-- value

    if (value == 0) {
      clearInterval(timer);
    }
  }, 1000);
};

$pauseTimerBtn.onclick = () => {
  clearInterval(timer);
};

$resetTimerBtn.onclick = () => {
  clearInterval(timer);
  $seconds.innerHTML = 10;
};
// let name = "X";
// //Template literal : dung cho value dai + gan cung bien
// let text = `
// Hello
// ${name}
// Goodbye
// `;

//Spread Operator
let nums1 = [1, 2, 3, 4];
let nums2 = [8, 9, 10];

let res1 = [...nums1, 10, 9, ...nums1];
let res3 = [nums1, 10, 9, nums1];
let res2 = [...nums1, ...nums2];

console.log(res1);
console.log(res2);

let part1 = { type: "cat", name: "Bob" };
let part2 = { age: "2" };
let summary = { ...part1, ...part2, name: "Peter" }; //name takes the 2nd value
console.log(summary);

//destructing: thuong su dung cho object nhieu hon
// let type = summary.type;
// let name = summary.name;
let { type, name } = summary; // voi Object dung {}
console.log(type, name);

let [a, b, c, d] = nums1; //voi array dung [] , phai khai bao du so thu tu cua array tu [0] toi [i]
console.log(c, d);

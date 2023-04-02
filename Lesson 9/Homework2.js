import { users } from "./data";

//Nhap vao so n = id
// const input = Number(prompt("Nhap vao so n"));
// if (input < 1 || input > 50) console.log("No id match");
// else {
//   const object = users.find((object) => object.id === input);
//   console.log(object);
// }

//Tim emails cua user co first name + last name includes chuoi ki tu

// const input = String(prompt("Nhap vao mot chuoi ki tu"));
// users.forEach(checkEmail);
// // let array = [];
// function checkEmail() {
//   const object = users.find(
//     (object) =>
//       object.last_name.includes(input) || object.first_name.includes(input)
//   );
//   //   array.push(object);
// }

// console.log(object);

//dem so users co age > 50
let ageOver50 = 0;
for (i = 0; i < users.length; i++) {
  if (users[i].age > 50) ageOver50++;
}
console.log(ageOver50);

// dem so luong users da ket hon va chua ket hon

let countMarried = 0;
let countNotMarried = 0;
for (i = 0; i < users.length; i++) {
  if (users[i].is_married == true) countMarried++;
  else countNotMarried++;
}
console.log(countMarried);
console.log(countNotMarried);

//dem so luong users theo tung nganh?

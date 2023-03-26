// let n = Number(prompt ('Nhap so'))
// if (n<0)
// {
//     alert ('n is smaller than 0')
// } else {
// let array1 = [];
// for (let i = 0; i < n; i++) {
//     let randomNumber = math.randomNumber();
//     array1.push (randomNumber);
// }
// console.log(array1);

// let n = number(prompt("nhap so"));
// let array2 = [10, -3];
// if (n < 2) {
//   alert("N must be higher than 2");
// } else {
//   let length = n - array2.length;
//   for (let i = 0; i < length; i++) {
//     array2.unshift(0);
//   }
// }
// console.log(array2);

// // let array3 = [1, 2, 3, 4, 5];
// // while (array3.length > 1) {
// //   array3.pop();
// // }
// // console.log(array3);

let tich = 1;
let array = [2, 6, 8, 9, -2];
for (let i = 0; i < array.length; i++) {
  const numbers = array[i];
  tich = tich * numbers; // tich * = numbers
}
console.log(tich);

//opt 1: sort the list first

//opt 2: find the min

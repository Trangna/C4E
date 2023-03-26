// array.find(function () {
//   return min % 2 == 0;
// });
// console.log(min);

const array = [2, 6, 8, 9, -2, 10, 21, 3];

//Tinh tich cac phan tu//
let tich = 1;
for (let i = 0; i < array.length; i++) {
  const number = array[i];
  tich *= number;
}
console.log(tich);

//Tinh gia tri trung binh//
let sum = 0;
for (let i = 0; i < array.length; i++) {
  const numbers = array[i];
  sum += numbers;
}
console.log(sum / array.length);

//So min chia het cho 2//
array.sort(function (a, b) {
  return a - b;
});
for (let i = 0; i < array.length; i++) {
  const min = array[i];
  if (min % 2 == 0) console.log(min);
}

//So max chia het cho 3//
array.sort(function (a, b) {
  return b - a;
});

//Loc ra cac so nguyen to//

//Kiem tra co phan tu <10//
console.log(array.some((el) => el < 10));

//Kiem tra moi phan tu >20//
console.log(array.every((el) => el > 20));

//Nhap vao so n cho den khi n la 1 so trong mang//

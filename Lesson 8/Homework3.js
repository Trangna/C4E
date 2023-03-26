// let input1 = prompt("Please input values for array d1");
// let d1 = input1.split(",").map(Number);
// console.log(d1);
// let input2 = prompt("Please input values for array d2");
// let d2 = input2.split(",").map(Number);
// console.log(d2);

//Kiem tra tat ca gia tri trong d1 co nam trong d2 khong//
const d1 = [1, 5, 6, 9, 3, 4];
const d2 = [2, 4, 6, 9, 11];

for (i = 0; i < d1.length; i++) {
  const x = d1[i];
  if (d2.includes(x) == false) console.log(x);
}

//Kiem tra co phan tu nao trong d2 chia het cho tong cua d1 khong//
let sumD1 = 0;
for (i = 0; i < d1.length; i++) {
  const sum = d1[i];
  sumD1 += sum;
}
console.log(sumD1);

for (i = 0; i < d2.length; i++) {
  const y = d2[i];
  if (d2[i] % sumD1 == 0) console.log(y);
  else document.write("No value");
}

//Tao mang moi gom ca so co gia tri /2 lan luot trong d2 va d1//

const newd1 = [];
for (let i = 0; i < d1.length; i++) {
  if (d1[i] % 2 == 0) newd1.push(d1[i]);
}
console.log(newd1);

const newd2 = [];
for (let i = 0; i < d2.length; i++) {
  if (d2[i] % 2 == 0) newd2.push(d2[i]);
}
console.log(newd2);

const newArray = newd2.concat(newd1);
console.log(newArray);

//Gia su d1 va d2 la 2 day so co thu tu tang dan. Hay tao ra 1 day so theo thu tu tang dan bao gom cac so cua d1 va d2//
const newArray1 = d1.concat(d2);
console.log(newArray1);
newArray1.sort(function (a, b) {
  return a - b;
});

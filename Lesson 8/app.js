// let names = ["Name A", "Name B", "Name C", 'Name D'];

// let numbers = [1, 100, 40, 3, 20];

// console.log(numbers[3]);

// let isRich = false;
// let isHandsome = true;
// let hasMoney = false;

// let features = [isRich, isHandsome, hasMoney];
// console.log(features[1]); //the 2nd variable
// console.log(features[0]); //the 1st variable
// // console.log(names[1]);

// // names[0] = "hello world";
// // names[4] = "Name D";

// // console.log(names);

// isRich = true;

// console.log(features);

// let array1 = ["a", "b", "c"];
// let array2 = ["a", "b", "c"];

// console.log(typeof array1); //typeof : function to check type
// console.log(typeof array2);
// console.log(array1 + array2); //auto change object to string when sum
// console.log(array1 == array2); //false because address of array 1 is different from array 2

// let array3 = array1; //true because the addresses are the same

// array1[0] = "hello";

// let names = ["Name A", "Name B", "Name C", "Name D", "Name B", "Name C"];
// // let tmp = names[0]; //khai bao 1 bien tam de luu gia tri cua variabl dau tien
// // names[0] = names[3];
// // names[3] = tmp;

// // console.log(names);

// //Option 1: for (let i = 0; i <arry.length, i++)

// for (let i = 0; i < names.length; i++) {
//   console.log(i + 1 + "." + names[i]);
// }

// for (let i = 0; i < names.length; i++) {
//   let stt = i + 1;
//   console.log(stt + "." + names[i]);

//   let name = names[i];
//   if (name == "Name B" || name == "Name C") {
//     console.log(stt + "." + name);
//   }
// }

// //Option 2: for...of
// let i = 0;
// for (const name of names) {
//   i++;
// }

//find even number
const nums = [12, 45, 67, 89, 17, 18, 0, 14, -3, 10];
for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  if (num % 2 == 0) console.log(num);
}
//sum
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  sum += num; //sum = sum + num
}

//find min
let min = nums[0];
for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  if (min > num) min = num;
}
console.log(min);

//find max
let max = nums[0];
for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  if (max < num) max = num;
}
console.log(max);

//add more object
nums.unshift(1, 2, 3);
nums.push(4, 5, 6);
console.log(nums);

//remove 1st object
let deletedFirstNumber = nums.shift();
console.log("The 1st number is deleted is" + deletedFirstNumber);
console.log(nums);

//remove the last object
let deletedLastNumber = nums.pop();
console.log("The last number is deleted is" + deletedLastNumber);
console.log(nums);

const pet1 = {
  name: "Bob",
  age: "2",
  kind: "dog",
};

const mySelf1 = {
  //attribute (thuoc tinh)//
  firstName: "ABC", // or "name":"ABC";
  lastName: "Nguyen",
  dob: "1212",
  address: "HCM",
  phoneNumber: "12124124",
  pet: {
    name: "Bob",
    age: "2",
    kind: "dog",
  },
  thePet: pet1,

  //behavior (hanh vi)//
};

console.log(mySelf1);

const mySelf2 = {
  //attribute (thuoc tinh)//
  firstName: "ABC", // or "name":"ABC";
  lastName: "Nguyen",
  dob: "1212",
  address: "HCM",
  phoneNumber: "12124124",
  pet: {
    name: "Bob",
    age: "2",
    kind: "dog",
  },
  thePet: pet1,
};

const mySelf3 = mySelf1;

console.log(mySelf1 == mySelf2); //false
console.log(mySelf1 == mySelf3); //true

//lay ra gia tri thuoc tinh "lastName" cua mySelf1//
console.log(mySelf1.lastName);
console.log(mySelf1["firstName"]);
// OR the below//
const key = "firstName";
console.log(mySelf1[key]);

console.log(mySelf1.firstName == mySelf2.firstName); //true : string , primitive data
console.log(mySelf1.pet == mySelf2.pet); //false: objects, reference data
console.log(mySelf1.thePet == mySelf2.thePet); //true

//thay doi thuoc tinh//
mySelf1.phoneNumber = "98124128";

//them thuoc tinh//
mySelf1.isRich = true;

console.log(mySelf1);

//xoa thuoc tinh//
delete mySelf1.dob;

console.log(mySelf1);

//Voi object dung for in, voi array dung for of//
for (const key in mySelf1) {
  console.log("Dac diem" + key + "co gia tri la:" + mySelf1[key]); //khac voi mySelf1.key
}

//Co 4 kieu function. Function can have only 1 output//
//Input of a function = parameter, output of a function = value//

//nhap vao 5 so - x5 lan code below//
// let input = NaN;
// do {
//    input = Number (prompt ("Nhap vao so: "));
// } while (isNaN(input));

//Khai bao function nhap va kiem tra 1 so
let a = 0;
let b = 0;
function inputNumber(label) {
  let input = NaN;
  do {
    input = Number(prompt("Nhap vao so " + label + ": "));
  } while (isNaN(input));

  return input; //tra ve gia tri khi call function va khong thuc thi cac doan code ben duoi trong block
  console.log("Thuc thi cho nay ko?");
}

//goi function inputNumber

// a = inputNumber("a");
// b = inputNumber("b");
// let c = inputNumber("c");
// console.log(a + b + c);

function inputName() {
  let input = null;
  do {
    input = prompt("Hello world,");
  } while (isNaN(input) == false);

  return input;
}

//function co tinh chat hoisting: su dung function truoc khi khai bao //
// let a = inputNumber("a");
// let b = inputNumber("b");
// function inputNumber(label) {
//   let input = NaN;
//   do {
//     input = Number(prompt("Nhap vao so " + label + ": "));
//   } while (isNaN(input));

//   return input;

// }

// function test() {
//     let a = 100;
//     let b = 10;

//     //closure (bao dong)
//     function calculateAB() {
//         return a + b;

//     return calculateAB (); //return calculateAB == return the definition of function calculateAB
//     }
// }

function doSomething() {
  console.log("Do something here");
}

function sayHello() {
  console.log("hello world");
}

function executeAfterSeconds(seconds, work) {
  console.log("Thuc thi sau" + seconds + "giay");
  setTimeout(work, seconds * 1000); //setTimeout dung milisecond
}

executeAfterSeconds(3, sayHello);
executeAfterSeconds(5, doSomething);

executeAfterSeconds(3, sayHello());
//let res = sayHello(); //undefined
//executeAfterSecond(undefined, work) //undefined

//khai bao arrow function

//arrow function khong co gia tri tra ve
const doAnything = () => {};

// arrow function co gia tri tra ve
// const doNothing =() => "hello";
const doNothing = (a, b, c, d) => {
  return "hello";
};

function sum(a, b, c) {
  return a + b + c;
}
//tuong duong function o tren
// const sum = (a, b, c) => a + b + c;

// const mySelf = {
//   name: "ABC", // khai bao thuoc tinh attribute
//   flirt: () => {
//     //khai bao hanh vi behavior : arrow function
//     console.log(this);
//   },

//   run: function () {
//     //khai bao hanh vi behavior
//     console.log(this);
//   },
// };
// mySelf.flirt();
// mySelf.run();

//Opt 1
// function findX(a, b, c) {
//   x1 = ((-b + Math.sqrt(b * b + 4 * a * c)) / (2*a),
//   x2 = ((-b - Math.sqrt(b * b + 4 * a * c)) / (2*a),
// }

//more popular  Opt 2
const findX = (a, b, c) => {
  if (a == 0) return;
  else {
    let arrayX = [];
    x1 = (-b + Math.sqrt(b * b + 4 * a * c)) / (2 * a);
    x2 = (-b - Math.sqrt(b * b + 4 * a * c)) / (2 * a);
    arrayX.push(x1);
    arrayX.push(x2);
    console.log(arrayX);
  }
};
findX(4, 5, 6);

// //Kiem tra a b c co phai la 3 canh 1 tam giac//
// const findX = (a, b, c) => {
//     if (a <= 0 && b <= 0 && c <== 0)
//     return;
//     else {

//Kiem tra
//dung function date

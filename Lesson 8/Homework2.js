const s = ["abch", "honey", "candy", "cake", "biscuit", "textabc"];

//Them 1 string text//
s.push("text");
console.log(s);

// //Tim 1 chuoi dau tien co min length trong mang//

const s1 = [];
for (let i = 0; i < s.length; i++) {
  s1.push(s[i].length);
}
console.log(s1);

const min = Math.min(...s1);
const i = s1.indexOf(min);
console.log(i);
console.log(s[i]);

//Tim nhung chuoi trong mang co chua gia tri text//

for (let i = 0; i < s.length; i++) {
  const string = s[i];
  if (string.includes("text") == true) console.log(string);
}

//Tao mang moi newS voi moi phan tu la 3 ky tu dau tien cua mang s//
const newS = [];
for (let i = 0; i < s.length; i++) {
  newS.push(s[i].substring(0, 3));
}
console.log(newS);

//Tao 1 chuoi la cac phan tu trong s, moi phan tu cach nhau boi dau "-"//
let text = s.toString();
console.log(text);
console.log(text.replace(/,/g, "-"));

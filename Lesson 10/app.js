//Quy uoc: tat ca bien luu phan tu html deu co dau $

//truy xuat phan tu thong qua id -> tra ve 1 gia tri
const $title = document.getElementById("big-title");
console.log($title);

//truy xuat phan tu thong qua class -> tra ve array
const $paragraphs = document.getElementsByClassName("red-paragraph");

for (const $paragraph of $paragraphs) {
  console.log($paragraph.parentElement);
  console.log($paragraph.children);
}

//truy xuat phan tu thon qua ten the
const $images = document.getElementsByTagName("img");
console.log($images);

//document.querySeletor(), document.querySelectorAll() => tim hieu them

//lay noi dung cua phan tu
let titleContent = $title.innerHTML;
console.log(titleContent);

$title.innerHTML = "New Content";

//lay ra gia tri thuoc tinh cua mot phan tu

let titleAttributeValue = $title.getAttribute("id");
console.log(titleAttributeValue);

//them moi/thay doi thuoc tinh cua phan tu

// $title.setAttribute('data-goodbye','This is goodbye');

// //xoa thuoc tinh cua phan tu
// $title.removeAttribute("data-goodbye");

//thay doi dinh dang cua phan tu
$title.style.color = "red";
$title.style.backgroundColor = "black";
$title.style.display = "flex";
//OR
$title.setAttribute("style", "color: red; background-color: black");

for (const $p of $paragraphs) {
  $p.style.color = "red";
}

//them phan tu vao trang web
const $link = document.createElement("a");
$link.innerHTML = "This is a reference link";
$link.setAttribute("href", "https://google.com");

document.body.append($link); //them vao cuoi
document.body.prepend($link); //them vao dau

// $title.append($link); //them the link vao phan tu bat ky

// $title.after($link); //them link vao sau title
// $title.before($link); // them link vao truoc title

// $title.append($link); //them link vao trong tilte

// //xoa phan tu tren trang web
// $title.remove();

//xoa phan tu cha
// $title.parentElement.remove();

//Listeners = function()

//Lay ra gia tri input , dung ham (this.value)
/* <input type="text" name ="" id="" onkeypress = "console.log(this.value)">   */

//Opt 1: script inline ngay trong html
//Opt 2
// $title.onclick = function () {
//   console.log("vua click vao");
// };

//Opt 3:
$title.onclick = handleClickTitle1;
$title.onclick = handleClickTitle2;

function handleClickTitle1() {
  console.log("hello");
}

function handleClickTitle2() {
  console.log("goodbye");
}

// onclick co tinh chat ghi de, neu khai bao 2 functions cung 1 event -> lay gia tri function cuoi

//addEventListener mang tinh add listeners, ko phai ghi de
$title.addEventListener("click", handleClickTitle1);
$title.addEventListener("click", handleClickTitle2);

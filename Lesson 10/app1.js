const $emailInput = document.getElementById("my-email");
$emailInput.onchange = function () {
  let email = $emailInput.value; //lay gia tri nhap vao cua o input
  if (!isEmailValid(email)) alert("Hay nhap lai email");
};

// //OR
// $emailInput.addEventListener('change', function() {

// });

//check function from stackoverflow
function isEmailValid(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

const $numberA = document.getElementById("number-a");
const $numberB = document.getElementById("number-b");
const $plusBtn = document.getElementById("plus-btn");
const $subBtn = document.getElementById("sub-btn");

$plusBtn.onclick = function () {
  let a = Number($numberA.value);
  let b = Number($numberB.value);

  alert(a + b);
};

$subBtn.onclick = function () {
  let a = Number($numberA.value);
  let b = Number($numberB.value);

  alert(a - b);
};

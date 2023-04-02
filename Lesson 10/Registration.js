const $phoneNumber = document.getElementById("phoneNumber");
const $email = document.getElementById("Email");

//Validate so dien thoai
$phoneNumber.onchange = function () {
  let phoneNumber = document.getElementById("phoneNumber").value;
  if (phoneNumber.length != 10 || phoneNumber.substring(0, 3) != "098")
    alert("So dien thoai khong hop le");
};

//Validate email

$email.onchange = function () {
  let email = $email.value;
  if (!isEmailValid(email)) alert("Email khong hop le");
};

function isEmailValid(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

//Validate retype password

const $pass1 = document.getElementById("pass1");
$pass1.onchange = function () {
  const password = document.getElementById("pass").value;
  const retypePassword = document.getElementById("pass1").value;
  if (password != retypePassword) {
    alert("Passwords do not match");
  }
};

//Print all value
const $submit = document.getElementById("submit");
$submit.onclick = function () {
  // let x = document.getElementById("myForm");
  let x = document.getElementsByClassName("input").value;
  let txt = "";
  for (i = 0; i < x.length; i++) {
    txt = txt + x.elements[i].value + "<br>";
  }
  console.log(txt);
};

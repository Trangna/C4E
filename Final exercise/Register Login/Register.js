const $email = document.getElementById("email");
const $login = document.getElementsById("btn-login");

$login.onclick = () => {
  let email = $email.value;
  if (!isEmailValid(email)) alert("Email không hợp lệ");
  // if (!isEmailExisted(email)) alert("Email không tồn tại");
};

function isEmailValid(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// function isEmailExisted(email) {
//   users.email.includes(email) == true;
// }

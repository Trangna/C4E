const $line = document.getElementById("input");

$line.onchange = function () {
  let x = document.getElementById("input").value;
  if (x <= 0) alert("Number must be integer");
  else numberOneTriangle(x);
};

function numberOneTriangle() {
  let x = $line.value;
  for (let i = 1; i <= x; i++) {
    let str = " ".repeat(x - i);
    let str2 = "*".repeat(i * 2 - 1);
    console.log(str + str2 + str);
  }
}

//Tim nghiem cua ham ax2 + bx +c = 0 voi a >0
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

// Kiem tra a b c co phai la 3 canh 1 tam giac
const findY = (a, b, c) => {
  if (a <= 0 && b <= 0 && c <= 0) return;
  else {
    if (a + b > c && a + c > b && b + c > a) console.log("true");
    else console.log("false");
  }
};

findY(4, 1, 3);

//Khai bao dau vao la day , month, year. Kiem tra input co tao thanh ngay thang nam hop le khong
const findZ = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) return;
  else {
    if (b == 2 && a > 29) return;
    else {
      if (a < 32 && b < 13 && c > 1900) console.log("true");
      else console.log("false");
    }
  }
};
findZ(30, 2, 1993);
findZ(12, 12, 1900);
findZ(28, 2, 2012);

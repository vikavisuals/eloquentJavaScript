// MINIMUM

function min(num1, num2) {
  if (num1 > num2) {
    return num2;
  } else {
    return num1;
  }
};
console.log(min(0, 10));

/*
function min(a, b) {
  if (a < b) return a;
  else return b;
}
*/



// RECURSION

function isEven(num) {
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
}
console.log(isEven(13));

/*
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}
*/
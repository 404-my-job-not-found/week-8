var uniquePaths = function (m, n) {
  return combination(m + n - 2, m - 1);
};

const combination = (n, r) => {
  return Math.round(factorial(n) / (factorial(r) * factorial(n - r)));
};

const factorial = (n) => {
  let num = 1;

  while (n > 0) {
    num *= n;
    n--;
  }
  return num;
};

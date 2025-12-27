// stepeni
const f2c = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};
const c2f = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

// pravoagolnik
const plostina = (a, b) => {
  return a * b;
};
const perimetar = (a, b) => {
  return 2 * (a + b);
};

// paren/neparen
const checkEvenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
module.exports = {
  f2c,
  c2f,
  plostina,
  perimetar,
  checkEvenOrOdd,
};

// ? Domashna - da se dodade uste eden modul so ime domasna.js
// ? koj ke ima funkcija da promeni farenhajt vo celzius i obratno
const domasna = require("./domasna.js");
console.log(`${domasna.c2f(15)} F.`);
console.log(`${domasna.f2c(90).toFixed(0)} C.`);

// ? da ima funkcija koja koja sto presmetuva plostina i perimetar na pravoagolnik
let stranaA = 5;
let stranaB = 10;
console.log(
  `Plostinata na pravoagolnikot e: ${domasna.plostina(stranaA, stranaB)}`
);
console.log(
  `Perimetarot na pravoagolnikot e: ${domasna.perimetar(stranaA, stranaB)}`
);

// ? da ima funkcija sto proveruva dali nekoj broj e paren ili neparen

let num1 = 6;
let num2 = 9;
console.log(`${num1} is ${domasna.checkEvenOrOdd(num1)}.`);
console.log(`${num2} is ${domasna.checkEvenOrOdd(num2)}.`);

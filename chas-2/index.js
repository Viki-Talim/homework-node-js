//? Zadaca broj 1:
// Da se kreira funkcionalna ekspresija so ime c2f koja ke konvertira celziusovi stepeni vo farenhajt;

const c2f = function (celsius) {
  return (celsius * 9) / 5 + 32;
};
console.log(c2f(0));
console.log(c2f(25));

//? Zadaca broj 2:
// Da se kreira Fat Arrow Function so ime f2c koja ke konvertira od farenhajt vo celzius i koja vo megju vreme ke logira ako temepratara e pod 0,
// ke logira deka temepraturata e niska, od 0 do 22 stepeni ke logira deka temperaturata e normalna i nad 22 stepeni ke logira temperaturata e pokacena
// Funkcijata treba da go vrati brojot vo stepeni
const f2c = (fahrenheit) => {
  const celsius = Math.round(((fahrenheit - 32) * 5) / 9);

  if (celsius < 0) {
    console.log("temperaturata e niska");
  } else if (celsius <= 22) {
    console.log("temperaturata e normalna");
  } else {
    console.log("temperaturata e pokacena");
  }
  return celsius;
};
console.log("Rezultat:", f2c(15));
console.log("Rezultat:", f2c(60));
console.log("Rezultat:", f2c(90));

const studenti = [
  { ime: "Bojan", prosek: 7.2, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Vesna", prosek: 9.1, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Tetovo" },
  { ime: "Vancho", prosek: 9.4, grad: "Kumanovo" },
  { ime: "Simona", prosek: 9.7, grad: "Kratovo" },
  { ime: "Trajanka", prosek: 7.4, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Ohrid" },
  { ime: "Natasha", prosek: 9.0, grad: "Kichevo" },
  { ime: "Stanko", prosek: 8.5, grad: "Demir Kapija" },
  { ime: "Damjan", prosek: 6.2, grad: "Kumanovo" },
  { ime: "Sandra", prosek: 8.2, grad: "Ohrid" },
];

//? Домашна
//? 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
console.log("---1---");

const podreduvanjePoIme = studenti
  .filter((s) => s.grad === "Skopje" && s.ime.endsWith("a") && s.prosek > 7)
  .sort((a, b) => a.ime.localeCompare(b.ime));

console.log(podreduvanjePoIme);

//? 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
console.log("---2---");

const podreduvanjePoProsek = studenti
  .filter((s) => s.prosek > 9 && s.grad != "Skopje")
  .sort((b, a) => b.ime.localeCompare(a.ime));

console.log(podreduvanjePoProsek);

//? 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
console.log("---3---");

const triStudenti = studenti
  .filter((s) => s.ime.length === 5)
  .slice(0, 3)
  .sort((a, b) => a.prosek - b.prosek);

console.log(triStudenti);

//? 4. Вкупен просек на студенти кои се од Куманово
console.log("---4---");

const studentiKumanovo = studenti.filter((s) => s.grad === "Kumanovo");
const vkupenProsek =
  studentiKumanovo.length > 0
    ? studentiKumanovo.reduce((sum, s) => sum + s.prosek, 0)
    : 0;

console.log(`Prosekot na studentite od Kumanovo e ${vkupenProsek}`);

//? 5. Просек на просеците од градовите Скопје и Охрид
console.log("---5---");

const selektiraniStudenti = studenti.filter(
  (s) => s.grad === "Skopje" || s.grad === "Ohrid"
);

const filterPoGrad =
  selektiraniStudenti.length > 0
    ? selektiraniStudenti.reduce((sum, s) => sum + s.prosek, 0) /
      selektiraniStudenti.length
    : 0;

console.log(
  ` Просек на просеците од градовите Скопје и Охрид e: ${filterPoGrad.toFixed(
    2
  )}`
);

//? 6. Да се додаде уште еден студент со име Горан, просек 7.3 и град Делчево
console.log("---6---");

const novStudent = { ime: "Goran", prosek: 7.3, grad: "Delcevo" };
studenti.push(novStudent);

// console.log(novStudent);
console.log(studenti);

//? 7. Да се избрише првиот студент во студенти
console.log("---7---");

const brisenjePrvStudent = studenti.shift();

// console.log(studenti);
console.log(brisenjePrvStudent);

//? 8. Да се креира нов array каде што студентите од Охрид и Куманово каде што оценките со просек се за 1 поголем(Динамички)
console.log("---8---");

const noviStudenti = studenti.map((s) => {
  if (s.grad === "Ohrid" || s.grad === "Kumanovo") {
    return {
      ...s,
      prosek: s.prosek + 1,
    };
  }
  return s;
});

console.log(noviStudenti);

//? json fajl so studenti [reden broj ,ime, prezime, prosek, grad]
//? Додавање на студент во фајлот
//? бришење на студентот од фајлот
//? менување на податоци на студент од фајлот
//? читање на сите студенти од фајлот

const readWrite = require("./readWrite.js");

//* prv del
//? - Треба да додадеме студент во фајлот
//? 1. Да ја вчитаме целата содржина од фајлот | fs.readFile
//? 2. Да ја конвертираме соджината од обичен текст во js низа\објект | JSON.parse
//? 3. Треба да ги додадете податоците на студентот во низата | Array.push
//? 4. Низата од ЈС низа\објект треба да биде конвертирана во текст | JSON.stringify
//? 5. Текстот треба да биде зачуван во фајлот | fs.writeFile
(async () => {
  try {
    let studenti;
    const dataString = await readWrite.fileRead("studenti.json");
    studenti = JSON.parse(dataString);
    const postoi = studenti.find((s) => s.reden_broj === 16);
    if (!postoi) {
      studenti.push({
        reden_broj: 16,
        ime: "Viktor",
        prezime: "Stojanovski",
        prosek: 8.7,
        grad: "Negotino",
      });
      const noviPodatoci = JSON.stringify(studenti, null, 2);
      await readWrite.fileWrite("studenti.json", noviPodatoci);

      console.log("Studentot e uspesno dodaden");
    } else {
      console.log("Studentot veke postoi");
    }

    //* vtor del
    //? - Името на студентот треба да биде сменето од ААА во ААБ
    //? 1. Да ја вчитаме целата соджина од фајлот | fs.readFile
    //? 2. Да ја конвертирате соджината од обичен текст во јс низа | JSON.parse
    //? 3. Да ги изминиме сите елементи во низата и да направиме промена само на соодветниот член | Array.map
    //? 4. Низата од јс низа треба да биде конвертирана во текст | JSON.strngify
    //? 5. Текстот треба да биде зачуван во фајл | fs.writeFile

    const dataZaMenuvanje = await readWrite.fileRead("studenti.json");
    studenti = JSON.parse(dataZaMenuvanje);
    studenti = studenti.map((student) => {
      if (student.ime === "Marko") {
        return { ...student, ime: "David" };
      }
      return student;
    });
    const noviPodatociTekst = JSON.stringify(studenti, null, 2);
    await readWrite.fileWrite("studenti.json", noviPodatociTekst);
    console.log("Podatocite se uspesno promeneti");

    //* tret del
    //? - Треба да се избрише студент од фајлот
    //? 1. Да ја вчитаме целата содржина од фајлот
    //? 2. Да ја конвертираме или парсираме содржината од фајлот
    //? 3. Може да избришиме соодветен член од низата
    //? 4. Да ја конвертираме назад во ЈСОН или стринг
    //? 5. Да го зачуваме самиот податок\фајл

    const dataZaBrisenje = await readWrite.fileRead("studenti.json");
    studenti = JSON.parse(dataZaBrisenje);
    const studentZaBrisenje = 14;
    studenti = studenti.filter((student) => {
      return student.reden_broj !== studentZaBrisenje;
    });
    const izbrisanoString = JSON.stringify(studenti, null, 2);

    await readWrite.fileWrite("studenti.json", izbrisanoString);
    console.log(`Studentot so reden broj ${studentZaBrisenje} e izbrisan.`);

    const finalenFajl = await readWrite.fileRead("studenti.json");
    console.log("Finalna lista na studenti:", JSON.parse(finalenFajl));
  } catch (err) {
    console.log("Greshka:", err);
  }
})();

const http = require("http");
const url = require("url");

//? Servis koj kje obrabotuva ruti od sledniot tip
//? /ime/bojan
//? /ime/pero
//? /ime/Aleksandra
//? /ime/marija
//? /ime/risto
//? /ime/sashko
//? /ime/Viktorija

//? -> parno: da, karakteri: 5, soglaski: 2, samoglaski:3

const handler = (req, res) => {
  const [_, ruta, ime] = req.url.split("/");

  if (ruta === "ime" && ime) {
    const dolzina = ime.length;
    const parenNeparen = dolzina % 2 === 0 ? "- Da" : "- Ne";
    const samoglaskiLista = ["a", "e", "i", "o", "u"];

    const bukvi = ime.toLowerCase().split("");

    const statistika = bukvi.reduce(
      (acc, bukva) => {
        if (samoglaskiLista.includes(bukva)) {
          acc.samoglaski++;
        } else if (bukva >= "a" && bukva <= "z") {
          acc.soglaski++;
        }
        return acc;
      },
      { samoglaski: 0, soglaski: 0 },
    );
    const rezultat = `Dali brojot na karakteri e paren? ${parenNeparen}. Ima ${dolzina} karakteri, soglaski se: ${statistika.soglaski}, a samoglaski: ${statistika.samoglaski}`;
    res.end(rezultat);
  } else {
    res.end("Rutata ne e pronajdena");
  }
};
const server = http.createServer(handler);
server.listen(12000, () => {
  console.log("Serverot e uspeshno startuvan na port 12000");
});

const express = require("express");
const calculator = require("./controller/calculator");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/force/:mass/:accelaration", calculator.forceCalculator);

app.get("/calculator", calculator.getCalculator);
app.post("/calculator", calculator.postCalculator);

app.listen(10000, (err) => {
  if (err) return console.log(err.message);
  console.log("Server started");
});

const express = require("express");
const studentController = require("./controller/studenti_controller");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", studentController.allStudents);
app.post("/studenti/delete/:id", studentController.deleteStudent);
app.post("/", studentController.addStudent);

app.listen(10000, (err) => {
  if (err) return console.log(err.message);
  console.log("Service started on port 10000");
});

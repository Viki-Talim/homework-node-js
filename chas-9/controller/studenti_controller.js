const { readFile, saveFile } = require("../model/studenti_model");

const allStudents = (req, res) => {
  let dataJson = readFile();
  res.render("index", { dataJson });
};

const deleteStudent = (req, res) => {
  const studentId = req.params.id;
  let dataJson = readFile();

  dataJson = dataJson.filter((s) => s.id != studentId);

  saveFile(dataJson, (err) => {
    if (err) {
      console.log("Error", err);
      return res.status(500).send("Error.");
    }
    res.redirect("/");
  });
};

const addStudent = (req, res) => {
  let dataJson = readFile();
  const newId = dataJson.length > 0 ? dataJson[dataJson.length - 1].id : 0;

  const newStudent = {
    id: Number(newId) + 1,
    ime: req.body.ime,
    prezime: req.body.prezime,
    prosek: Number(req.body.prosek),
  };

  dataJson.push(newStudent);
  saveFile(dataJson, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error saving student data.");
    }
    res.redirect("/");
  });
};

module.exports = {
  allStudents,
  deleteStudent,
  addStudent,
};

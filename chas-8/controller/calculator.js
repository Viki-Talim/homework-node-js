const fs = require("fs");

const parseTemplate = async (template, object = null) => {
  return new Promise((success, fail) => {
    fs.readFile(`${__dirname}/../views/${template}`, "utf8", (err, content) => {
      if (err) {
        return fail(err);
      }
      if (object) {
        for (property in object) {
          content = content.replaceAll(`{{${property}}}`, object[property]);
        }
      }
      return success(content);
    });
  });
};

const forceCalculator =  async (req, res) => {
    const mass = req.params.mass;
    const accelaration = req.params.accelaration;
    const force = mass * accelaration;

    const response = await parseTemplate("calculator.html", {
        data: force,
        name: "SECOND NEWTON LAW"
    });
    res.send(response);
};

const getCalculator = async (req, res) => {
    const response = await parseTemplate("calculator_form.html");
    res.send(response);
};
const postCalculator = async (req, res) => {
    if (req.body.m === "" || req.body.a === "") {
        return res.status(400).send("Bad request");
    }
    
    const mass = req.body.m;
    const accelaration = req.body.a;
    const force = mass * accelaration;

    const response = await parseTemplate("calculator.html",{
        data:force,
        name:"SECOND NEWTON LAW",
    });
    res.send(response);
};
module.exports = {
    forceCalculator,
    getCalculator,
    postCalculator,
};
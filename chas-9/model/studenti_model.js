const fs = require("fs");

let dataJson = require("../studenti.json");

const readFile = () => {
  return dataJson;
};
const saveFile = (newData, callback) => {
dataJson = newData;

  const updatedData = JSON.stringify(dataJson, null, 2);
  fs.writeFile("studenti.json", updatedData, "utf8", callback);
};

module.exports = {
  readFile,
  saveFile,
};

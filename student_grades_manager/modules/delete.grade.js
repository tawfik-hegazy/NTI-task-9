const fs = require("fs");
const path = require("path");
const saveGrades = require("./save.grades");

const deleteGrade = (id) => {
  const dataPath = path.join(__dirname, "../data/grades.json");
  let grades = JSON.parse(fs.readFileSync(dataPath));
  grades = grades.filter((g) => g.id !== id);
  saveGrades(grades);
  console.log(" Grade deleted.");
};

module.exports = deleteGrade;

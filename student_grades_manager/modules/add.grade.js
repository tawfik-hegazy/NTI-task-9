const fs = require("fs");
const path = require("path");
const saveGrades = require("./save.grades");

const addGrade = (name, subject, grade,id) => {
  const dataPath = path.join(__dirname, "../data/grades.json");
  const grades = JSON.parse(fs.readFileSync(dataPath));
  grades.push({ id: Date.now(), name, subject, grade ,id});
  saveGrades(grades);
  console.log(" Grade added successfully.");
};

module.exports = addGrade;

const fs = require("fs");
const path = require("path");
const saveGrades = require("./save.grades");

const updateGrade = (id, newGrade) => {
  const dataPath = path.join(__dirname, "../data/grades.json");
  const grades = JSON.parse(fs.readFileSync(dataPath));
  const index = grades.findIndex((g) => g.id === id);
  if (index !== -1) {
    grades[index].grade = newGrade;
    saveGrades(grades);
    console.log(" Grade updated.");
  } else {
    console.log(" Student not found.");
  }
};

module.exports = updateGrade;

const fs = require("fs");
const path = require("path");

const readGrades = () => {
  const dataPath = path.join(__dirname, "../data/grades.json");
  const grades = JSON.parse(fs.readFileSync(dataPath));
  console.log(" All Grades:");
  grades.forEach((g) => console.log(g));
};

module.exports = readGrades;

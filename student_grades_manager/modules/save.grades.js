const fs = require("fs");
const path = require("path");

const saveGrades = (grades) => {
  fs.writeFileSync(path.join(__dirname, "../data/grades.json"), JSON.stringify(grades, null, 2));
};

module.exports = saveGrades;

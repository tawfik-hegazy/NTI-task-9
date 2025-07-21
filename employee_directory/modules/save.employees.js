const fs = require("fs");
const path = require("path");

const saveEmployees = (employees) => {
  fs.writeFileSync(path.join(__dirname, "../data/employees.json"), JSON.stringify(employees, null, 2));
};

module.exports = saveEmployees;

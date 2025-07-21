const fs = require("fs");
const path = require("path");

const readEmployees = () => {
  const filePath = path.join(__dirname, "../data/employees.json");
  const employees = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  console.log(" All Employees:");
  employees.forEach((e) => console.log(e));
};

module.exports = readEmployees;

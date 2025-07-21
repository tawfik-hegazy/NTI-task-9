const fs = require("fs");
const path = require("path");
const saveEmployees = require("./save.employees");

const addEmployee = (id, name, department, jobTitle) => {
  const filePath = path.join(__dirname, "../data/employees.json");
  const employees = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  employees.push({ id, name, department, jobTitle });
  saveEmployees(employees);
  console.log("Employee added successfully.");
};

module.exports = addEmployee;

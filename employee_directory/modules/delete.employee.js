const fs = require("fs");
const path = require("path");
const saveEmployees = require("./save.employees");

const deleteEmployee = (id) => {
  const filePath = path.join(__dirname, "../data/employees.json");
  let employees = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const originalLength = employees.length;
  employees = employees.filter((e) => e.id !== id);

  if (employees.length === originalLength) {
    console.log(" Employee not found.");
  } else {
    saveEmployees(employees);
    console.log(" Employee deleted.");
  }
};

module.exports = deleteEmployee;

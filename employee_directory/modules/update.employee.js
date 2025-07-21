const fs = require("fs");
const path = require("path");
const saveEmployees = require("./save.employees");

const updateEmployee = (id, newjobTitle) => {
  const filePath = path.join(__dirname, "../data/employees.json");
  const employees = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const index = employees.findIndex((e) => e.id === id);
  if (index === -1) {
    console.log(" Employee not found.");
    return;
  }

  employees[index] = { ...employees[index], ...newjobTitle };
  saveEmployees(employees);
  console.log(" Employee updated.");
};

module.exports = updateEmployee;

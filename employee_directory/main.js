const add = require("./modules/add.employee");
const read = require("./modules/read.employees");
const del = require("./modules/delete.employee");
const update = require("./modules/update.employee");

add(1, "Ahmed", "IT", "Developer");
add(2, "Mona", "HR", "assistance");
update(112,{jobTitle:"developer"})
del(122)
read();


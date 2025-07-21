const add = require("./modules/add.grade");
const read = require("./modules/read.grades");
const del = require("./modules/delete.grade");
const update = require("./modules/update.grade");

add("jana", "digital logic", 95,124);
add("youssef", "Biology", 88,111);
read();
update(139, 99); 
del(21);        

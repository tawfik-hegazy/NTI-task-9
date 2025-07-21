const add = require("./modules/add.item");
const read = require("./modules/read.menu");
const del = require("./modules/delete.item");
const update = require("./modules/update.item");

add("burger","sandwitches",80,"available");
del("vip");
update("Pizza",50,"unavialable")




read()

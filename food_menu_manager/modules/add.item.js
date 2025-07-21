const fs = require("fs");
const path = require("path");
const saveItems = require("./save.menu");


const addItem = (name, category, price, availability) => {
  const filePath = path.join(__dirname, "../data/menu.json");
  const items = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  items.push({name ,category ,price , availability });
  saveItems(items);
  console.log("The Item is added successfully.");
};
module.exports = addItem;

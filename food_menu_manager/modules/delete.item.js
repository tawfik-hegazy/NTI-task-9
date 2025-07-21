const fs = require("fs");
const path = require("path");
const saveItems= require("./save.menu");

const deleteItem = (name) => {
  const filePath = path.join(__dirname, "../data/menu.json");
  let Items = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const originalLength = Items.length;
  Items = Items.filter((e) => e.name !== name);

  if (Items.length === originalLength) {
    console.log(" Item not found.");
  } else {
    saveItems(Items);
    console.log(" Item deleted.");
  }
};

module.exports = deleteItem;

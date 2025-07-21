const fs = require("fs");
const path = require("path");
const saveItems = require("./save.menu");

const updateItem = (name, price, availability) => {
  const filePath = path.join(__dirname, "../data/menu.json");
  const items = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const index = items.findIndex((e) => e.name === name);
  if (index === -1) {
    console.log("Item not found.");
    return;
  }

  items[index].price = price;
  items[index].availability = availability;

  saveItems(items);
  console.log("Item updated successfully.");
};

module.exports = updateItem;

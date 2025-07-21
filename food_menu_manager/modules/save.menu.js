const fs = require("fs");
const path = require("path");

const saveItems = (items) => {
  fs.writeFileSync(path.join(__dirname, "../data/menu.json"), JSON.stringify(items, null, 2));
};

module.exports = saveItems;

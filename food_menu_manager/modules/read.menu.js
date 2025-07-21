const fs = require("fs");
const path = require("path");

const readItems = () => {
  const filePath = path.join(__dirname, "../data/menu.json");
  const Items  = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  console.log("The Menu:");
 Items .forEach((e) => console.log(e));
};

module.exports = readItems;

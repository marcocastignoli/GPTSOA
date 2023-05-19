const fs = require("fs");
const aiPlugin = require("./ai-plugin.json");

const instructions = fs.readFileSync("./description_for_model.md");

aiPlugin.description_for_model = instructions.toString();

fs.writeFileSync(
  "./public/ai-plugin.json",
  JSON.stringify(aiPlugin, undefined, 2)
);

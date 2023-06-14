const fs = require("fs");
const filePath = "messages.txt"
let messages = fs.readFileSync(filePath, "utf8")
console.log("Start program");
console.log(messages);
console.log("End program");

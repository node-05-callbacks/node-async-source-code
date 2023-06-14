const fs = require("fs");
const filePaths = ["message1.txt", "message2.txt", "message3.txt"]


console.log("Start program");
for (const filePath of filePaths) {
  let message = fs.readFileSync(filePath, "utf8")
  console.log(message);
}
console.log("End program");

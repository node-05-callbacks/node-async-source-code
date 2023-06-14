const fs = require("fs");
const filePaths = ["message1.txt", "message2.txt", "message3.txt"];

function print(err, message) {
  if (err) {
    console.log(err);
  }
  console.log(message);
}

console.log("Start program");

fs.readFile(filePaths[0], "utf8", (err, message) => {
  print(err, message);
  fs.readFile(filePaths[1], "utf8", (err, message) => {
    print(err, message);
    fs.readFile(filePaths[2], "utf8", (err, message) => {
      print(err, message);
    });
  });
});

console.log("End program");

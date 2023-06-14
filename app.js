const fs = require("fs");
const filePaths = ["message1.txt", "message2.txt", "message3.txt"];

function readFileAsync(filePath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath,  encoding, (err, message) => {
      if (err) {
        reject(err);
      } else {
        resolve(message);
      }
    });
  });
}

console.log("Start program");

readFileAsync(filePaths[0], "utf8")
  .then((data) => {
    console.log(data);
    return readFileAsync(filePaths[1], "utf8");
  })
  .then((data) => {
    console.log(data);
    return readFileAsync(filePaths[2], "utf8");
  }).then((data) => {
    console.log(data);
  }).catch((err)=>{
    console.log(err);
  })

console.log("End program");

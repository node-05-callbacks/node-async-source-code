const fs = require("fs");
const filePaths = ["message1.txt", "message2.txt", "message3.txt"];

function readFileAsync(filePath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, message) => {
      if (err) {
        reject(err);
      } else {
        resolve(message);
      }
    });
  });
}

async function start() {
  try {
    for (const filePath of filePaths) {
      let data = await readFileAsync(filePath, "utf8");
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
  console.log("End program");
}

console.log("Start program");
start();

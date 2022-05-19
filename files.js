const fs = require("fs");

fs.readFile("./docs/textfile.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

fs.writeFile("./docs/textfile1.txt", "Welcome", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Data written to file");
});

fs.writeFile("./docs/textfile1.txt", "Welcome to written file", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Data written to file");
});

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Directory is created.");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("folder deleted");
  });
}

// deleting files
if (fs.existsSync("./docs/textfile1.txt")) {
  fs.unlink("./docs/textfile1.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}

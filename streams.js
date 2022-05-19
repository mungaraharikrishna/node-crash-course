const fs = require("fs");

const readStream = fs.createReadStream("./docs/textfile.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream('./docs/textfile2.txt');

readStream.on('data', (chunk) => {
    writeStream.write('chunking....\n')
    writeStream.write(chunk);
});

readStream.on('end', () => {
    console.log('completed.')
})

readStream.on('error', (err) => {
    console.log('error', err)
})
setTimeout(() => {
    console.log('in set timeout');
    clearInterval(myInterval);
}, 3000);

var myInterval = setInterval(() => {
    console.log('I am time interval...')
}, 1000)

console.log('Directory Name', __dirname);

console.log('File Name', __filename)
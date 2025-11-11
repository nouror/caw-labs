// 01
var myvar = require('fs');
const text = process.argv[2];

myvar.writeFileSync('f.txt', text);
console.log("The file has been saved!");

//02 +03
const filename = process.argv[2];
const new_text = process.argv[3];

myvar.writeFileSync(filename, new_text);
console.log("The file has been saved!");



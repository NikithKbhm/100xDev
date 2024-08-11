const fs = require("fs");

const contents = fs.readFile("a.txt","utf-8");//asynchronous
console.log(contents);

const contents1 = fs.readFileSync("b.txt","utf-8");//synchronous
console.log(contents1);
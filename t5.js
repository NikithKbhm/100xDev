const fs = require("fs");

function read(err,data){
        console.log(data);
}

const contents = fs.readFile("a.txt","utf-8",read);//asynchronous

const contents1 = fs.readFileSync("b.txt","utf-8",read);//synchronous

console.log("done!");
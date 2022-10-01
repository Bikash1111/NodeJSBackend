// import module from different file

/*
const app = require('./app')
const arr = [5,3,5,6,7,87,3,1];

let result  =  arr.filter((data) =>{
    return data>5
})

console.log(app)
console.log(result)

*/

/*
console.log("path: ",__dirname)
console.log("file name: ",__filename)

/*

//create file system
/*
const fs = require('fs')
fs.writeFileSync("NewFile","Bikash Maharana")

*/

//create server

const http = require('http');

http.createServer((req,res)=>{
    res.write("<h1>This is first Title </h1>")
    res.end();
}
).listen(4500);
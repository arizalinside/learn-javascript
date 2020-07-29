// (function (exports, require, module, __filename, __dirname) {

// })
// console.log("oke");
// console.log(`Filename : ${__filename}`);
// console.log(`Dirname : ${__dirname}`);

// [1]
// const name = require("./name"); //import
// name();

// [2]
const { name, lastName } = require("./name");
name();

console.log(lastName);

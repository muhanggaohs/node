// const fs = require("fs");

// fs.copyFileSync("text.txt", "text2.txt");
// console.log('text.txt was copied to text2.txt');

// const hero = require("superheroes");
// for (let i = 0; i < 10; i++) {
//     console.log(hero.random());
// }


const op = require("./module");

const moduleTitle = op.title;
const moduleAdd = op.tambah(10, 5);
const moduleTimes = op.kali(10, 5);

console.log(moduleTitle);
console.log(moduleAdd);
console.log(moduleTimes);
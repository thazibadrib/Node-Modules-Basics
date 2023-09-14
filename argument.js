const minimist = require("minimist");
// console.log(process.argv);

// process.argv.forEach((val,index)=>{
//     console.log(`${index}:${val}`);
// })

//minimist requires us to use "--" before the key name of the argument.
//eg: node argument.js --name=adrib

const newArg = minimist(process.argv.slice(2));
console.log(newArg.name);
const repl = require("repl");

const local = repl.start("node console->");

local.on('exit', ()=>{
    console.log("exiting REPL");
    process.exit();
})
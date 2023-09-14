// console.log("Test log");
// console.log("First file");
// console.log("Nodemon test");
//with 0 or 1 we can manipulate the nodemon 
// process.exit(0);

// const _ = require("lodash");

// const arr = [1,2,3,4,5];

// console.log(_.chunk(arr));
// console.log(_.first(arr));
// console.log(_.last(arr));

// const cowsay = require("cowsay");

// console.log(cowsay.say({
//     text: "Testing testing",
//     e: "00",
//     t:"U"
// }));

// const {wrestling, box} = require("./fight");

// console.log(JSON.stringify(wrestling, null, 2));
// console.log(JSON.stringify(box, undefined, 2));


//PATH MODULES

const path = require("path");

const filePath = "C:\\Users\\Dell\\Desktop\\cvr\\nodeProj\\nodeTutorial1\\files\\sample.txt"

//dirname
//console.log(path.dirname(filePath), "01");
//basename
//console.log(path.basename(filePath), "02");
//extension
//console.log(path.extname(filePath), "03");
//Working directory name
//console.log(__dirname);
//Working file name
//console.log(__filename);
//Join paths

// const sampleFile ="sample.txt";

// console.log(path.join(path.dirname(filePath), sampleFile));

//File System

const fs = require("fs");
const fsPromises = require("fs").promises;

// fs.readFile(filePath, "utf-8", (err,data)=>{
//     if(err) throw new Error("Something went wrong");
//     console.log(data.toString());
// })

// try {
//     const data = fs.readFileSync(path.join(__dirname, "files", "sample.txt"), "utf-8");
//     console.log(data.toString());
// } catch (error) {
//     console.log(error);
// }

//FS_SYNC Example

// const fileReading=async()=>{
//     try {
//         const data = await fsPromises.readFile(filePath, {encoding: "UTF-8"});
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fileReading()


//Writing into a file

const txtFile = path.join(__dirname,"files","text.txt");
const content = "Test statement 3 for text.txt";

// fs.writeFile(txtFile,content,(err)=>{
//     if(err) throw new Error("Something went wrong");
//     console.log("Writing is complete");
//     fs.readFile(txtFile, "utf-8", (err,data)=>{
//         if(err) throw new Error(err);
//         console.log(data);
//     })
// })

//DO THE SAME THING WITH FS_PROMISES

const writingFile = async()=>{
    try {
        await fsPromises.writeFile(txtFile,"\n file name updated", {flag:"a+"});
        //await fsPromises.appendFile(txtFile, "\n appended statement");
        await fsPromises.rename(txtFile, path.join(__dirname,"files","newText.txt"))
        const data = await fsPromises.readFile(path.join(__dirname,"files","newText.txt"));
        console.log(data.toString());
    } catch (error) {
        console.log(error);
    }
}

writingFile();
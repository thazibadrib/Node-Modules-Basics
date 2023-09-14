const CustomError = require("./CustomError");

const error = new Error("Error one");
//console.log(error.message);
//console.log(error.stack);

//throw new Error("Error two")

// const CustomError = require("./CustomError");
// throw new CustomError("Another customized error")

//handle exceptions with try catch

// try {
//     doThis()
// } catch (error) {
//     console.log("Something happened");
//     console.log(error);
// }

function doThis(){
    const data = fetch("localhost:300/api")
    console.log("From doThis");
    // const data = "Data from doThis";
    // return data;
}

// uncauth exceptions

process.on("uncaughtException", (err)=>{
    console.log("There was an uncaught exception", err);
});

//doThis();

// const promise = new Promise((resolve, reject)=>{
//     if(true){
//         resolve(doThis());
//     }
//     else{
//         reject(doThis)
//     }
// })

// promise.then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log("New ERROR");
//     console.log(err);
// })

//Exception with async await

const someFunc =async()=>{
    try {
        await doThis()
    } catch (error) {
        throw new CustomError(error.message)
    }
}

someFunc();
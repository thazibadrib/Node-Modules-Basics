
//%s fromats variable to string
//%d fromats variable to number
//%i fromats variable to integer
//%o fromats variable to object

// console.log("My name is %s and my preffered stack is %o and my age is %d ", "Adrib",{front:"React", full:"MERN"},  26);
// console.clear();
// console.count("I am Adrib");
// console.count("I am Adrib");
// console.count("I am Thazib");
// console.count("I am Bhuiyan");
// console.countReset("I am Adrib");
// console.count("I am Adrib")

// const func1=()=>console.trace();
// const func2=()=> func1();

// func2();

// const sum=()=> console.log(`sum is ${2+3}`);
// const multiply=()=> console.log(`multiple is ${2*3}`);

// const measumerTime=()=>{
//     console.time("for sum()"); //time and timeEnd must have the same string for console
//     sum();
//     console.timeEnd("for sum()");
//     console.time("for multiply()");
//     multiply();
//     console.timeEnd("for multiply()");
// }

// measumerTime();

const ProgressBar = require("progress");

const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {
    total:20
})

const timer= setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
}, 100);


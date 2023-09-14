console.log("start");
const asyncFunc=(cb)=>{
    console.log("inside asyncFunc");
    setTimeout(()=>{
        cb(null, "valid data")
        
    },0)
    console.log("inside end of asyncFunc");
}

asyncFunc((err,data)=>{
    if(err){
        throw err
    }
    else{
        console.log(data);
    }
})
console.log("end of script");
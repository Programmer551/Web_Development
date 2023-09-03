const fs=require("fs")
const stream=fs.createReadStream("./test/big.txt",{highWaterMark:90000,encoding:"utf8",})
stream.on("data",(result)=>{
console.log(result)
})
stream.on("error",(error)=>{
    console.log("This is Error: "+error)
})

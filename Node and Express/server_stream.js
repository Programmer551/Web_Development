const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
const filestream=fs.createReadStream("./test/big.txt")
filestream.on("open",()=>{
filestream.pipe(res)
})
})
server.listen(3000)
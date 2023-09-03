console.time("time")
const fs=require("fs")
for(let i=0;i<=10000;i++){
    fs.writeFileSync("./test/big.txt",`Hello World ${i} \n`,{flag:"a"})
}   
console.timeEnd("time")
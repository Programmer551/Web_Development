const { captureRejectionSymbol } = require("events")
const fs=require("fs")
const first=fs.readFileSync("./test/first.txt","utf8")
const second=fs.readFileSync("./test/second.txt","utf8")
console.log(first)
console.log(second)

fs.writeFileSync(
    "./test/first.txt",
    "This is magic",
    {flag
    :"a"}
)

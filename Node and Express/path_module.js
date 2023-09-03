const path=require("path")
// console.log(path.sep)

const filepath=path.join("/test","test2","text.txt")
console.log(filepath)
const base =path.basename(filepath)
console.log(base)

const abs=path.resolve(__dirname,"/test","test2","text.txt")
console.log(abs)
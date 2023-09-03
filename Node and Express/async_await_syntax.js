const {readFile}=require('fs').promises;
const start =async()=>{
    // try{
        let first=await readFile('./test/first.txt','utf8')
        let second=await readFile('./test/second.txt','utf8')
    // }
    // catch{
    //     console.log('Error Happened')
    // }

console.log(first)
console.log(second)
}
start()
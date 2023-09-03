const fs=require('fs')

const readfile=(path)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf8',(err,data)=>{
            if (err) {
                reject(err)
            }
            else{
                resolve(data)
            }  
        })       
    })
}
readfile('./test/first.txt').then((data)=>{
    console.log(data)
  }).catch((err)=>{
     console.log(err)
 })
console.log("Hello World")
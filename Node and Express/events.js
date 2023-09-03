// let event=require("events")
// let newevent=new event;
// newevent.on("render",()=>{
// console.log("Data Fetched")
// })
// setTimeout(()=>{
//     newevent.emit("render")

// },1000)


// Server using Events

const http=require("http")
const server=http.createServer()

server.on("request",(res,req)=>{
    if(res.url=="/"){
        req.end(`<h1>Hello World</h1>`)

    }
    else if(res.url=="/about"){
   req.end(`<h1>Hello World</h1>`)
    }
    else if(res.url=="/contact"){
        for(let i=0;i<100000;i++){
            console.log(i)
        }
        req.end(`<h1>Contact Page</h1>`)
         }
    req.end(`Error Occoured`)


})
server.listen("3000")

console.log("Done")
console.log("Server is listening at localhost:3000")
const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.status(200).send("<h1>Home Page</h1>")
})
app.get("/about",(req,res)=>{
    res.status(200).send(`About Page`)
})
app.get("/contact",(req,res)=>{
    res.status(200).send(`Contact Page`)
})
app.all("*",(req,res)=>{
    res.status(200).send(`<h1>Page not Found</h1>`)
})
app.listen(3000,()=>{
    console.log("App is listening on port 3000")
})
console.log("All Done")
const http=require("http")
const fs=require("fs")
const html=fs.readFileSync("./Project 7/index.html")
const style=fs.readFileSync("./public/style.css")
const responsive=fs.readFileSync("./public/responsive.css")
const script=fs.readFileSync("./public/script.js")
const bg=fs.readFileSync("./public/img/bg.jpg")
const img=fs.readFileSync("./public/img/img.jpg")
const server=http.createServer((req,res)=>{
    console.log(req.url)
    console.log("User hit the server")
    if(req.url=="/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write(html)
            res.end()
    }
    else if(req.url=="/style.css"){
        res.writeHead(200,{"content-type":"text/css"})
        res.write(style)
            res.end()
    }
    else if(req.url=="/responsive.css"){
        res.writeHead(200,{"content-type":"text/css"})
        res.write(responsive)
            res.end()
    }
    else if(req.url=="/script.js"){
        res.writeHead(200,{"content-type":"text/javascript"})
        res.write(script)
            res.end()
    }
    else if(req.url=="/img/bg.jpg"){
        res.writeHead(200,{"content-type":"img/jpg+xml"})
        res.write(bg)
            res.end()
    }
    else if(req.url=="/img/img.jpg"){
        res.writeHead(200,{"content-type":"img/jpg+xml"})
        res.write(img)
            res.end()
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.write(`<h1>Page not Found</h1>`)
        res.end()
    }


    
})
server.listen(3000)
const https = require("http");
//  const port=require('port')

const server = https.createServer((res, req) => {
  if (res.url == "/") {
    req.end(`<h1>Hello Duraid </h1>`);
  } else if (res.url == "/about") {
    // for(let i =0;i<1000000;i++){
    // console.log(i)
    // }
  } else if (res.url == "/contact") {
    req.end(`<h1>Hello World</h1>`);
  }
  req.end(`<h1>Error Occured</h1>`);
});
server.listen("3000");
console.log(`Server is listening at localhost:3000`);

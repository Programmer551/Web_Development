const express = require('express')
const app = express()
const port = 3000
const path=require("path")

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
  app.use(express.static(__dirname + '/public'));
  res.sendFile(path.join(__dirname+'/script.js'));
  // res.send('Hello Duraid! lorem22')
})
app.get('/about', (req, res) => {
  res.send('About!')
})
app.listen(port, () => {
  console.log(`Example app listening on port http:\\localhost:${port}`)
})
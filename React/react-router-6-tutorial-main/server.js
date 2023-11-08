
const express = require('express')
const app = express()
const port = 3000
app.use(express.static("./build"))
app.get('/', (req, res) => {
  console.log('Get Request')
})
app.get('/about', (req, res) => {
  console.log('Get Request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const routes = require('./routes')
var bodyParser = require('body-parser')



const app = express()
const port = 9090

app.use(bodyParser.json())
app.use('/',routes());


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express')
const app = express()
const port = 3000
app.get('*', function(req, res) {
  res.end('Hello world!')
})

app.listen(port, function() {
  console.log('The server is running, please open browser at localhost 3000')
})

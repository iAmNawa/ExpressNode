const app = require('express')()
const express = require('express')
const port = 3000

app.use(express.static(__dirname))

app.listen(port)
console.log('the server is running on port', port)

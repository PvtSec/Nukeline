const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hey!! Welcome to NukeLine!')
})

app.listen(3000, function () {
  console.log('Nukeline app listening on port 3000!')
})

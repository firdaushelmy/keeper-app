const express = require('express');

const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})


const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('server is running on ${PORT}');
})
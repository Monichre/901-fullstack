require('dotenv').load()

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

/*
  Possible compression layer
  var express = require(“express”);
const expressStaticGzip = require(‘compression’); // compression.js gist is available on the github.
var app = express();
 
app.get('*', expressStaticGzip(path.join(__dirname), {
 urlContains: ‘static/’,
 fallthrough: false,
 enableBrotli: true,
}));

*/


app.set('port', process.env.PORT || 3001)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 'no-cache')
  next()
})


app.use(express.static(path.resolve(__dirname, './client/build')))
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})


app.listen(app.get('port'), function() {})

module.exports = app

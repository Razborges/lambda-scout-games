const express = require('express')
const AWS = require('aws-sdk');

const app = express()
var db = new AWS.DynamoDB();

app.get('/', (req, res) => res.send('Hello World!'))

module.exports = app

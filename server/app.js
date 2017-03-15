'use strict';

// Set default node environment to development; Bluemix runtime is production
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');

// Setup server
var app = express();
var server = require('http').createServer(app);

// bootstrap bluemix
var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || 9000);

if (host !== 'localhost') app.set('env', 'production');

app.use(express.static('public'))
//require('./config/express')(app);
require('./routes')(app);

// Start server
app.listen(port, host);
console.log('App started on port ' + port);

// Expose app
exports = module.exports = app;
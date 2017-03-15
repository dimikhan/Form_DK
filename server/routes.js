
'use strict';

var errors = require('./components/errors');
var path = require('path');
var include = require('include')(__dirname);
var dbinit = include('database');
var Cloudant = require('cloudant');
var db = dbinit.initDBConnection();

module.exports = function(app) {

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });

    var bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({extended: false}));
    var cope, idValue;
    var details = new Object();
    app.post('/api/formdetails', function (req, res, next) {
        var cope = req.body;
        //configure();
     console.log("Value of cope---->"+cope)
     dbinit.insertdata(cope);
            res.send(JSON.stringify(cope));
        });
    /*});*/

  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

};
 
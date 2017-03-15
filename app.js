var Cloudant = require('cloudant');
var express = require('express');
var include = require('include')(__dirname);
var dbinit = include('database'); 
var app = express();
var db = dbinit.initDBConnection();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/projectdetails',function(req,res){
console.log("Printing front end data in backend--->"+req.body);

	// var userDetails={
	// 	name:req.body.question,
	// 	password:req.body.answer
	// }
  // console.log("Data send from Front End---->"+Details);
  // dbinit.insertdata(Details);
	//res.write("welcome "+req.body.answer);
	res.end();
})



var server = app.listen(8081, function () {


  console.log("Meenakshi's  app is listening");

})
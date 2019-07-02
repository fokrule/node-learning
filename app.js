var express = require('express');

var app = express();


 app.get('/', function( req, res ){
	 res.send('express is found');
 });

 app.get('/profile/:name', function(req, res){
	res.send('You are viewing profile for ' + req.params.name);
 });

 app.get('/contact/', function(req, res){
	res.sendFile(__dirname + '/contact.html');
 });
 
 app.listen(2000);
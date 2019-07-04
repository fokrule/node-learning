var express = require('express');

var app = express();

app.set('view engine','ejs');

 app.get('/', function( req, res ){
	 res.send('express is found');
 });

 app.get('/profile/:name', function(req, res){
	res.send('You are viewing profile for ' + req.params.name);
 });
 
 app.get('/user/:name', function (req, res) {
	var data = {
		name : req.params.name,
		age : 26,
		Occupation : "Software Engineer",
		hobbies : [
			'coading', 'traveling', 'eating'
		]
	} 
	res.render('user', {user: data});	 
 });

 app.get('/contact/', function(req, res){
	res.sendFile(__dirname + '/contact.html');
 });
 
 app.listen(2000);
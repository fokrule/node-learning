var express = require('express');

var app = express();

app.set('view engine','ejs');
app.use('/assets', express.static('views/assets'));
// here /assets is route and views/assets is folder directory

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
	 console.log(req.query);
	res.render('contact',{qs:req.query});
 });
 
 app.listen(2000);
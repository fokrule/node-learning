var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request, response){
	console.log('Request was made : ' + request.url );
	response.writeHead(200, {'Content-Type' : 'application/json'});
	var myObject = {
		name : 'Forhad',
		age : 26,
		profession : 'Software Engineer'
	};
	response.end(JSON.stringify(myObject));
});

server.listen(3000, '127.0.0.1');
console.log('Listening to the server');
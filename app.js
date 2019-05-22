var http = require('http'); // load http module


var server = http.createServer(function(request, response) {
	console.log('request : ' + request.url);
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end('Hey Forhad');
}); // create server

server.listen(3000, '127.0.0.1');
console.log('Listening');
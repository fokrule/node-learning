var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request, response){
	console.log('Request was made : ' + request.url );
	if (request.url === '/home' || request.url === '/'){
		console.log('dd');
		response.writeHead(200, {'Content-Type' : 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(response);
	}
	else if (request.url === '/contact'){
		console.log(response.url);
		response.writeHead(200, {'Content-Type' : 'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(response);
	}
	else if (request.url === '/api/user') {
		var user = [
			{
				name : 'Forhad',
				age : 26
			},
			{
				name : 'Fokrul',
				age : 25
			}
		];
		response.writeHead(200, {'Content-Type' : 'application/json'});
		response.end(JSON.stringify(user));		
	}
	else {
		response.writeHead(400, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/404.html').pipe(response);
	}
});

server.listen(3000, '127.0.0.1');
console.log('Listening to the server');
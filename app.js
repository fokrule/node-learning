var http = require('http'); // load http module

// here we will use fs module or file systme module to read data

var fs = require('fs');


var server = http.createServer(function(request, response) {
	console.log('request : ' + request.url);
	response.writeHead(200, {'Content-Type' : 'text/html'});
	var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8'); // create read able stram and read about.tzt file
	myReadStream.pipe(response);
}); // create server

server.listen(3000, '127.0.0.1');
console.log('Listening');
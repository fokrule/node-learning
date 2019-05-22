var http = require('http'); // load http module

// here we will use fs module or file systme module to read data

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/about.txt', 'utf8'); // create read able stram and read about.tzt file
var myWriteStream = fs.createWriteStream(__dirname + '/about-write.txt');
myReadStream.on('data', function(chunk){
	console.log('Chunk received');
	myWriteStream.write(chunk); // the data got by chunk will store in about-write.txt
});


/*var server = http.createServer(function(request, response) {
	console.log('request : ' + request.url);
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end('Hey Forhad');
}); // create server

server.listen(3000, '127.0.0.1');
console.log('Listening');*/
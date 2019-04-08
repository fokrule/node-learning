var fs =  require('fs'); // this is the way to require any node library. here fs is a node library

// those are synchronous code. So those will run first then other code. >> started
var readMe = fs.readFileSync('about.txt', 'utf8');

fs.writeFileSync('new-about2.txt', readMe);

// those are synchronous code. So those will run first then other code. << end

fs.readFile('about.txt', 'utf8', function(err, data) {
	fs.writeFile('esync.txt', data);
});
console.log('this will run before above asynchronous code. Because asyc function never stop other code');
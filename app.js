var fs = require('fs');
//delete a file
//fs.unlink('sabout.txt');
//create a folder/dir
//fs.mkdir('testing2');

// remove a dir/folder
//fs.mkdir('testing2');

// create folder and also create new file
/*fs.mkdir('folder', function(){
	fs.readFile('about.txt', 'utf8', function(err, data) {
		fs.writeFile('./folder/about.txt', data);
	})
});*/

// remove folder. Before that need to remove all file from that folder
fs.unlink('./folder/about.txt', function(){
	fs.rmdir('./folder');
});
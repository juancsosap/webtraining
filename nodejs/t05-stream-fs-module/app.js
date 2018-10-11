var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(`${__dirname}/files/document.txt`, 'utf8');
var writeStream = fs.createWriteStream(`${__dirname}/files/output.txt`);

var count = 0;
var size = 0;
readStream.on('data', function (chunk) {
	writeStream.write(chunk);
	size += chunk.length;
	console.log(`Data Size received: ${size} characters`);
	console.log(`Chunk #${++count} received`);
});

var readStream1 = fs.createReadStream(`${__dirname}/files/input.txt`, 'utf8');
var writeStream1 = fs.createWriteStream(`${__dirname}/files/output_piped.txt`);

// Using Pipe
readStream1.pipe(writeStream1);

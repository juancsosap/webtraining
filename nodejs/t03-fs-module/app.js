var fs = require('fs');

// ------------------- SYNC -----------------
// Sync Creation of Folder
fs.mkdirSync('files');
console.log('Directory Sync Creation Complete');

// Sync File Write
fs.writeFileSync('./files/message.txt', 'Content of the File');
console.log('File Sync Creation/Write Complete');

// Sync File Read
var content = fs.readFileSync('./files/message.txt', 'utf8');
console.log('File Sync Read Complete');

// Sync Removing of File
fs.unlinkSync('./files/message.txt');
console.log('File Sync Remotion Complete');

// Sync Removing of Folder
fs.rmdirSync('files');
console.log('Directory Sync Remotion Complete');

// ------------------- ASYNC -----------------
// Async Creation of Folder
fs.mkdir('documents', function () {
	console.log('Directory Async Creation Complete');

	// Async File Write
	fs.writeFile('./documents/message.txt', content, function () {
		console.log('File Async Creation/Write Complete');

		// Async File Read
		fs.readFile('./documents/message.txt', 'utf8', function (err, data) {
			console.log('File Async Read Complete');
			console.log(data);

			// Async Removing of File
			fs.unlink('./documents/message.txt', function () {
				console.log('File Async Remotion Complete');

				// Async Removing of Folder
				fs.rmdir('documents', function () {
					console.log('Directory Async Remotion Complete');
				});

			});

		});

	});

});

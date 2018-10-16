console.log('Downloading ...');
console.log(__dirname);
console.log(__filename);

var perc = 0;

var timer = setInterval(function () {
	if(perc <= 100) {
		console.log(perc + '% Downloaded');
		perc += 5;
	} else {
		clearInterval(timer);
	}
}, 100);

setTimeout(function () {
	console.log('Loading ...');
	console.log('Hello World!!!');
}, 3000);

function hello() {
	console.log('Hello World!!!')
}

hello();

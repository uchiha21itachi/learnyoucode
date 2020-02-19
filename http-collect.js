var http = require('http')

http.get(process.argv[2], (response) => {
	let str = "";
	response.on('data', (data) => {
		str = str + data; 
	})
	response.on('error', (error) => {
		console.error(error);
	})
	response.on('end', () => {
		var total_count = str.toString().split('').length
		console.log(total_count);
		console.log(str.toString());
	})
}).on('error', (error) => {
	console.error(error);
})
var http = require('http')

http.get(process.argv[2], (response) => {
	let data = ""
	response.on('data', (data) => {
		console.log(data.toString());
	})
	response.on('error', (error) => {
		console.error(error);
	})
}).on('error', (error) => {
	console.error(error);
})
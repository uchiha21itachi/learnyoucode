var http = require('http')

let str = [];
var j = 5
var counter = 0;
for (var i = 2; i < j; i++) {
    (function(i) {
		http.get(process.argv[i], (response) => {
			let chunk = "";
			response.on('data', (data) => {
				chunk +=  data; 
			})
			response.on('error', (error) => {
				console.error(error);
			})
			response.on('end', () => {
				str[i] = chunk.toString();
				counter++;
				if ( counter == 3)
					console.log(str[2].toString()+"\n"+str[3].toString()+"\n"+str[4].toString()+"\n");
			})
		}).on('error', (error) => {
			console.error(error);
		})
    })(i);
}
var fs = require('fs')
const path = require('path');


fs.readdir(process.argv[2].toString(), function readDir(err, data){
	if (err) return console.error(err)
	const str = data.toString().split(",")
	for (x in str){
		if (path.extname(str[x]) == '.' + process.argv[3].toString()){
			console.log(str[x])
		} 
	}
})
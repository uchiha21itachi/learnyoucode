const fs = require('fs')
var total_nl = 0

function countLine(callback) {
	fs.readFile(process.argv[2], function cal_newline(err, data){
		total_nl = data.toString().split("\n").length - 1
		callback()
	})
}

function printTotalLines() {
	console.log(total_nl)
}
countLine( printTotalLines)
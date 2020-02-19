var fs = require('fs')
const path = require('path');
var retData = new Array()

module.exports = function (dirname, fileext, callback) {
	fs.readdir(dirname.toString(), function read(err, data){
		if (err){
			return callback(err)
		}
		const str = data.toString().split(",")
		for (x in str){
			if (path.extname(str[x]) == '.' + fileext.toString()){
				retData.push(str[x])
			} 
		}
		return callback(null, retData)
	})
}
const fs = require('fs')

var buffer = fs.readFileSync(process.argv[2])
const str = buffer.toString()
var new_line = str.split('\n').length - 1
console.log(new_line)

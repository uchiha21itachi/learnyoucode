'use strict'


var http = require('http');
var fs = require('fs');

let port = process.argv[2];
let fileName = process.argv[3].toString();

var server = http.createServer(function (req, res){
    
    res.writeHead(200, { 'content-type': 'text/plain' });

    //Opens file as a readable stream
    var readStream = fs.createReadStream(fileName);
    
    readStream.on('open', function (){
        readStream.pipe(res);
    });

    readStream.on('error', function (err) {
        res.end(err);
    });
});
server.listen(port);
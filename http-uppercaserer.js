
var http = require('http');
const map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function (req, res){
    if (req.method == 'POST'){
            req.pipe(map(function (chunk) {
                return chunk.toString().toUpperCase();
            })).pipe(res);
    };
    server.on('error', (err) => {
        throw err;
    })
});
server.listen(port);

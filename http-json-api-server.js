var http = require('http');

var server = http.createServer(fucntion(req, res) {
    var reqUrl = new URL(req.url, 'http://example.com');
    const time = new Date(reqUrl.searchParams.get('iso'))

})\]]\

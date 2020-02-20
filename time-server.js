var net = require("net");
let port = process.argv[2];
var date = new Date     
var server = net.createServer(function (socket) {
    // console.log('client connected');
    var year = checkZeros(date.getFullYear());
    var month = checkZeros(date.getMonth() + 1);
    var day = checkZeros(date.getDate());
    var hour = checkZeros(date.getHours());
    var minute = checkZeros(date.getMinutes());
    var fullDate = year+"-"+month+"-"+day+" "+hour+":"+minute+"\n";
    console.log(fullDate);
    socket.end(fullDate);
    server.on('error', (err) => {
        throw err;
    })
})
server.listen(port)
function checkZeros(num){
    if (num < 10)
        return ('0'+num);
    return (""+num);
}
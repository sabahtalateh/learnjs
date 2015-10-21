var net = require('net')

var server = net.createServer(function(socket) {
    var d = new Date()
    var dateString = d.getFullYear() + '-' + (Number(d.getMonth()) + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + "\n"
    socket.write(dateString)
    socket.end()
})

server.listen(Number(process.argv[2]))

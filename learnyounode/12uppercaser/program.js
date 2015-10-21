var http = require('http')
var map = require('through2-map')

http.createServer(function(request, response) {
    if (request.method === 'POST') {
        var body = ''

        request.on('data', function(data) {
            body += data.toString()
        });

        request.on('end', function() {
            response.write(body.toUpperCase())
            response.end()
        })
    }


}).listen(process.argv[2])


;

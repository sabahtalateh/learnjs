var http = require('http')
var map = require('through2-map')
var urlParser = require('url')

http.createServer(function(req, res) {
    var parsedUrl = urlParser.parse(req.url)
    var action = parsedUrl.pathname.split('/')[2]
    var time = parsedUrl.query.split('=')[1]
    timeToJSON(action, time, function(result) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.write(JSON.stringify(result))
        res.end()
    })

}).listen(process.argv[2])

var timeToJSON = function(action, time, callback) {
    var d = new Date(time)
    var result = {}

    if (action === 'unixtime') {
        result = {
            'unixtime': d.getTime()
        }
    }

    if (action === 'parsetime') {
        result = {
            'hour': d.getHours(),
            'minute': d.getMinutes(),
            'second': d.getSeconds()
        }
    }

    callback(result)
}

;

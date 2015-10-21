var http = require('http')
var bufferList = require('bl')

http.get(process.argv[2], function(response) {
    response.pipe(bufferList(function(err, data) {
        console.log(data.toString().length)
        console.log(data.toString())
    }))
})

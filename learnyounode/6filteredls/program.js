var filter = require('./filter')

var dir = process.argv[2]
var ext = process.argv[3]

filter(dir, ext, function(err, list) {
    if (err)
        console.log("There is an error")

    list.forEach(function(el) {
        console.log(el)
    })
})

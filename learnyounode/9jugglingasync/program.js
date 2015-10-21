var http = require('http')
var urls = [
    process.argv[2],
    process.argv[3],
    process.argv[4]
]

var totalUrls = urls.length
var finishedUrls = 0
var result = []

urls.forEach(function(url, index) {
    result.push('')

    http.get(url, function(response) {
        response.on("data", function(data) {
            result[index] += data.toString()
        })

        response.on("end", function() {
            finishedUrls += 1

            if (finishedUrls === totalUrls) {
                result.forEach(function(el) {
                    console.log(el)
                })
            }
        })
    })
})

;

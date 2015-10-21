var http = require('http')
var bufferedList = require('bl')
var result = []
var count = 0

function printResults() {
    for (var i = 0; i < 3; i++) {
        console.log(result[i])
    }
}

function httpGet(index) {
    http.get(process.argv[2 + index], function(response) {
        response.pipe(bufferedList(function(err, data) {
            if (err)
                return console.log(err)

            result[index] = data.toString()
            count++

            if (count === 3)
                printResults()

        }))
    })
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}






;

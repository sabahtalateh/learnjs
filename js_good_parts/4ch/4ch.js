var myObject = (function() {
    var value = 0;

    return {
        increment: function(inc) {
            value += typeof inc === 'number' ? inc : 1
        },
        getValue: function() {
            return value
        }
    }
}())

var m = myObject
m.increment(22)
console.log(m.getValue())

var quo = function(status) {
    return {
        get_status: function() {
            return status
        }
    }
}

var myQuo = quo('amazed')
console.log(myQuo.get_status())

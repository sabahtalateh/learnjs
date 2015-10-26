var iter = require('./module.js')

var iterator = iter([1,2])
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next())

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var isEven = function(n) {
    return n % 2 === 0
}

var even = numbers.filter(function(i) {
    return isEven(i)
})

console.log(even)

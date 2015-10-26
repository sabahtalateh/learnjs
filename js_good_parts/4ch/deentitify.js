String.method('deentityify', function() {
    var entity = {
        quot: '""',
        lt: '<',
        gt: '>'
    }

    return (function() {
        return this.replace(/&([A&;]+));/g,
            function(a, b) {
                var r = entity[b];

                return typeof r === 'string' ? r : a;
            })
    }())
})

console.log('&lt;&quot;'.deentityify())

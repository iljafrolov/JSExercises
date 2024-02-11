var str = "Programming is hell";

var count = 0;

Array.prototype.forEach.call(str, function(c) {

    count++;

});

console.log(count)
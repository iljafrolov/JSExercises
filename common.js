var array1 = [1, 2, 3, 4, 5]
var array2 = [3, 4, 5]
var duplicates = array1.filter(function(val) { return array2.indexOf(val) != -1; })
console.log(duplicates)
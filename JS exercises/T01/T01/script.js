
//surfaceArea with callback
function surfaceAreaCallback(shape, a, b, c){
    result = shape(a, b, c);
    console.log(result);
}

var triangle = function (a, b, c){
    return a * b / 2;
};

var rectangle = function (a, b, c){
    return a * b;
};

var trapezoid = function (a, b, c){
    return (a + b) * c / 2;
};

surfaceAreaCallback(trapezoid, 4, 3, 2);


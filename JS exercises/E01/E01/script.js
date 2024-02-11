// Create 3 anonymous functions, each of them only writing a message in the console 
// ("more than zero" / "equal to zero" / "less than zero").

var more = function() {
    console.log("more than zero");
}

var equal = function() {
    console.log("equal to zero");
}

var less = function() {
    console.log("less than zero");
}

// Write a program, calling one of those 3 functions, when a condition is met 
// (value of some variable is more than zero / equal to zero / less than zero).

var something = 2;

if(something > 0){
    more();
} else if(something == 0){
    equal();
} else{
    less();
}
// // example comment

// /* 
//     example comment with several lines!
//     still commented!
// */

// /*

// */
// // var aux

// /*
//     - Block-scoped
// */
// // let b = 5

// /*
//     - Block-scoped
//     - Must be initialized
//     - Once initialized, cannot be modified*
//         *in some specific scenarios, it can (object example)
// */
// // const c = "I do not change at all"
// // const obj = {
// //     property1: "value1",
// //     property2: "value2"
// // }

// // You cannot re-declare let or constant variables
// // let b = 3
// // const c = ""

// var globalScoped = "global"
// let blockScoped = "block"
// const blockScoped2 = "block2"

// function NestedBlock() {
//     var globalScoped = "global2"
//     let blockScoped = "block2"

//     console.log(`Console.Log inside Block:\nGlobalScoped - ${globalScoped}\nBlock Scoped - ${blockScoped}, ${blockScoped2}`)
// }

// function NestedBlock2() {
//     globalScoped = "global2"
//     blockScoped = "block2"

//     console.log(`Console.Log inside Block 2:\nGlobalScoped - ${globalScoped}\nBlock Scoped - ${blockScoped}, ${blockScoped2}`)
//     console.log(random)
// }

// NestedBlock()
// NestedBlock2()

// console.log(random)
// console.log(`Console.Log:\nGlobalScoped - ${globalScoped}\nBlock Scoped - ${blockScoped}, ${blockScoped2}`)

let num1 = 3

if (num1 % 2 == 0) console.log("Number is Even") 

let num2 = 5, num3 = 5
console.log(`Sum operation = ${num2 + num3}`)
console.log(`Difference operation = ${num2 - num3}`)
console.log(`Division operation = ${num2 / num3}`)
console.log(`Multiplication operation = ${num2 * num3}`)
console.log(`Division operation = ${num2 / 0}`)

num2 = 10
console.log(`Multiplied operation = ${num2}`)
console.log(`Increment / decrement = ${num2++} / ${num2--}`)
console.log(`Past Increment / decrement = ${num2}`)
console.log(`Increment before / decrement before = ${++num2} / ${--num2}`)
console.log(`Past Increment / Past decrement = ${num2} / ${num2}`)

let aux2 = 150
let aux1 = aux2 > 50 ? true : false
let aux3 = `Random "Text" ${aux2} continue`.toLowerCase()
let aux4 = "Random 'Text' " + aux2 + " continue..."

console.log(typeof aux1, typeof aux2, typeof aux3);

if (aux2 > 10) {
    aux1 = true
}
else {
    aux1 = false
}

const myArray = ["string", 1, false, [1, 2, 3], 4, 5]
const myObject = {
    numberOfSeats: 4,
    numberOfTires: 4,
    weight:2000,
    log: () => {}
}

myObject.numberOfTires = 5
myArray[1] = 2
console.log(`My car has ${myObject.numberOfTires} tires.`)
console.log(`My array has ${myArray[1]} number.`)

let num4
let num5 = null
console.log(`What's the value? ${num4 + 1}`)
console.log(`What's the value? ${num5}`)

console.log(`What's the size of my string? ${aux4.length}`)
console.log(`What's the index of T? ${aux3.indexOf('T')}`)

let aux7 = 5
let aux8 = 4

console.log(2 === Number.parseInt('2'))

if (aux7 === aux8) { // this is mandatory
    aux7++
}
else if (aux7 > aux8) { // this is optional
    aux7 = 0
}
else if (aux7 < aux8) { // this is optional
    aux7 = 0
}
else { // this is optional
    aux8++
}

switch(aux7) {
    case 5:
        //if aux7 == 5, do something...
        break;
    case 20:
        //if aux7 == 20, do something else...
        break;
    case 600:
        //if aux7 == 600, do something else...
        break;
    default:
        //otherwise, do something different...
        break;
}

function MyFunction(param1, param2) { // arguments are optional
    let result = param1 + param2

    console.log(result)
}

function MyFunction2(param1, param2) {
    let result = param1 + param2

    return result
}

MyFunction(2, 4)
console.log(MyFunction2(10, 10))

let myFunction = (param1, param2) => {
    return param1 * param2
}

let myFunction2 = function(param1, param2) {
    return param1 / param2
}

console.log(myFunction(10, 10))
console.log(myFunction2(10, 10))

let i = 0

for (i; i < 20; i++) {
    if (i == 5) continue
    else if (i == 10) break

    console.log(`Doing something over here... ${i} times!`)
}

// let IsRunning = true
// let j = 0

// do {
//     IsRunning = j < 50
//     j++
//     console.log(`Doing something over here... ${j} times! Again!`)
// } while(IsRunning)

// IsRunning = true
// j = 0

// while(IsRunning) {
//     IsRunning = j < 50
//     j++
//     console.log(`Doing something over here... ${j} times! Again! Aggaaain!`)
// }

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`Array value: ${a[a.length]}`)

for (i = 0; i < a.length; i++) console.log(`Array value: ${a[i]}`)

var car = {
    brand: "ford",
    model: "fiesta",
    year: 1999,
    mileage: 200000,
    launch: function() { 
        console.log("works!");
    }
}

console.log(car.brand); //outputs object's property

car.model = "focus"; //assigns new value to the property

car.launch(); //executes a method (function) from inside the object

console.log(`Random number: ${Math.ceil(Math.random() * 100)}`)

//gets weekday of current date
var d = new Date();
var day = d.getDay();

console.log(day)
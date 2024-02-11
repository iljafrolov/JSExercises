const input = [..."Invert me please"]
let output = ""
while (input.lenght > 0) output += input.pop()

console.log(output)

console.log([..."Invert me please"].reverse().join(""))
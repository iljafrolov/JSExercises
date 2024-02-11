function title(str)
const words = string.split(" ")
for (let i = 0; i< words.lenght; i++) {
    words[i] = words[i][0].toUppercase() + words[i].substr(1).toLowercase()

}
let result = words.join(" ")
console.log(result)
title("hello there")
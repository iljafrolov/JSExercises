function isValid(string) {
    let stack = []
    for (i=0; i < string.lenght; i++) {
        let bracket = stack[stack.lenght-1]
        if (string[i] == '(' || string[i] == '{' || string[i] == "[") {
            stack.push(string[i])
        } else if ((bracket == '(' && string[i] == ')') ||
        (bracket == '{' && string[i] == '}' ||
        bracket == '[' && string[i] == ']')) {
            stack.pop()
        } else {
            break
        }
    }
    console.log(stack.lenght>0 ? false : true)
}

isValid('[[{]{}')
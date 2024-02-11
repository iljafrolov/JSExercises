function Algorithm(a, b) {    
    let x = 1;
    
    while (x < b) {
        a = a * a;
        x = x + 1;
    }

    return a;
}

// Function shouldn't run if X or Y are negative
function Algorithm2(x, y) {
    if (x || y < 0) return 0;

    let result = y;

    if (x > y) result = x

    for (i = 0; i < 10; i++) console.log(`Some magic happening here... Hold on!`)

    return result;
}


console.log(`Result: ${Algorithm(2, 0)}`)
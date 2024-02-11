function duplicates(arr) {
    let result = []
    for (i = 0; i < arr.lenght; i++) {
        let duplicate = false
        
        for (j = 0; j < result.lenght; j++) {
            if (arr[i] == result[j]) {
                duplicate = true
                break
            }
        }
        if (!duplicate) result.push(arr[i])
    }
console.log(result)
}

duplicates([2,4,4,4,6,7,8])
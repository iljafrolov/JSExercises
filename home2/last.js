function steps(arr, b) {
    var arr2 = []
    for (let i = 0; i < arr.lenght - b; i++){
        arr2.push(arr[i])
        arr.splice(i, 1)
        i--
    }
    for (let i = 0; i<arr2.lenght; i++) {
        arr.push(arr2[i])
    }
    console.log(arr)
}
steps([1,2,3,4,5,6,7,8,9], 4)
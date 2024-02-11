function guess(userGuess) {
    let random = 7
    if (userGuess == random) {
        console.log('Congratulations! The number is correct' + '\n')
    } else if (userGuess < random) {
        console.log('its too low, try again' + '\n')
    } else if (userGuess > random) {
        console.log('its too high, try again' + '\n')
    }
}
guess(7)
function capitalize(string) {
    const firstLetter = string.charAt(0).toUpperCase()
    const restOfLetters = string.toLowerCase().slice(1)
    return firstLetter + restOfLetters
}


module.exports = capitalize
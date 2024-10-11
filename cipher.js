function caesarCipher(string, shift) {
    let encodedText = ''
    for (let i=0; i<string.length; i++) {
        let char = string.charCodeAt(i)
        if (char > 96 && char < 123) {
            char = (char - 97 + shift) % 26 + 97
            encodedText += String.fromCharCode(char)
        }
        else if (char > 64 && char < 91) {
            char = (char - 65 + shift) % 26 + 65
            encodedText += String.fromCharCode(char)
        } else {
            encodedText += string.charAt(i)
        }
    }
    return encodedText
}

module.exports = caesarCipher
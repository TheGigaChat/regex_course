// Regex

// Count all words from the `text`.
// We count separate numbers as words.
// `text` is a string
// return: number
function countAllWords1(text) {
    const regexPattern = /[a-z0-9_']+/gi
    const matchResult = text.match(regexPattern)
    return matchResult.length
}
console.log(
    countAllWords1("Red_dragon attacks!"),
    countAllWords1("Don't be jealous!"),
    countAllWords1("HP: 100, XP: 250"),
    countAllWords1("")
)  // 2, 3, 4, 0


// Challenge extension
// Separate words by a space
// new additional inputs
function countAllWords2(text) {
    const regexPattern = /\S+/gi
    const matchResult = text.match(regexPattern)
    return matchResult.length
}
console.log(
    countAllWords2("Red_dragon attacks!"),
    countAllWords2("Don't be jealous!"),
    countAllWords2("HP: 100, XP: 250"),
    countAllWords2(""),
    countAllWords2("example@gmail.com"),
    countAllWords2("back!   no"),
)  // 2, 3, 4, 0, 1, 2

// Regex - string scanner

// Validate that `username` contains digits
// `username` is a string
// return: true or false
function validateInputContainsDigits(username) {
    const regexPattern = /[0-9]/gi
    return regexPattern.test(username)
}
console.log(
    validateInputContainsDigits("dragon"),
    validateInputContainsDigits("dragon123"),
    validateInputContainsDigits("Player99"),
)  // false, true, true

// Extract all stats from the `stats` parameter
// `stats` is a string
// return: array of numbers
function extractAllStats(stats) {
    const regexPattern = /[0-9]{1,}/g
    const matchResult = stats.match(regexPattern)

    if (matchResult === null) {
        return []
    } else {
        return matchResult
    }
}
console.log(
    extractAllStats("HP: 100, XP: 250"),
    extractAllStats("Damage: 20"),
    extractAllStats("A random string.")
)  // ['100', '250'], ['20'], []

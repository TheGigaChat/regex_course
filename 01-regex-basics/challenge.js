// Regex - Basics

// Validate that `username` contains digits
// `username` is a string
// return: true or false
function validateInputContainsDigits(username) {
    // your solution here
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
    // your solution here
}
console.log(
    extractAllStats("HP: 100, XP: 250"),
    extractAllStats("Damage: 20"),
    extractAllStats("A random string.")
)  // ['100', '250'], ['20'], []

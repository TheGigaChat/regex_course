// Regex - lookahead and lookbehind

// Extract prices from the text
// price is a number after the $ symbol
// return: array of prices
function extractPrices(text) {
    // your solution here
}

console.log(
    extractPrices("Sword $15, Shield $8, Potion $50")
)
// ['15', '8', '50']

console.log(
    extractPrices("No prices here")
)
// []

console.log(
    extractPrices("$100 bonus and 25 items")
)
// ['100']


// Validate username
// username must not contain the word `admin`
// username may contain only letters and digits
// username must be 4-8 characters long
// return: true or false
function validateNonAdminUsername(username) {
    // your solution here
}

console.log(
    validateNonAdminUsername("Dragon99")
)
// true

console.log(
    validateNonAdminUsername("superadmin")
)
// false

console.log(
    validateNonAdminUsername("tooLongName")
)
// false

console.log(
    validateNonAdminUsername("bad_name")
)
// false


// Validate password
// password must contain:
// at least one lowercase letter
// at least one uppercase letter
// at least one digit
// minimum 6 characters
// return: true or false
function validatePassword(password) {
    // your solution here
}

console.log(
    validatePassword("Dragon123")
)
// true
console.log(
    validatePassword("dragon123")
)
// false
console.log(
    validatePassword("DRAGON123")
)
// false
console.log(
    validatePassword("Dragon")
)
// false

// Regex - anchors

// Validate username
// `username` may contain letters, digits, and underscore
// `username` must be 5-12 characters long
// return: true or false
function validateUsername(username) {
    // your solution here
}

console.log(
    validateUsername("dragon"),
)  // true
console.log(
    validateUsername("dragon_123"),
)  // true
console.log(
    validateUsername("ab"),
)  // false
console.log(
    validateUsername("player!"),
)  // false
console.log(
    validateUsername("very_long_username")
)  // false


// Extract all TODO lines from the `text`
// each TODO must start at the beginning of a line
// return: array of TODO lines
function extractTodoLines(text) {
    // your solution here
}

console.log(
    extractTodoLines("TODO: create login\nDONE: profile\nTODO: fix menu")
)  // ['TODO: create login', 'TODO: fix menu']
console.log(
    extractTodoLines("hello\nTODO: add sounds\nrandom text")
)  // ['TODO: add sounds']
console.log(
    extractTodoLines("hello TODO: nothing here")
)  // []

// Lesson 8
// Regex - replace

// Censor bad words
// replace `noob`, `stupid`, and `idiot` with "***"
// return: updated message
function censorMessage(message) {
    // your solution here
}

console.log(
    censorMessage("You are a noob")
)  // You are a ***
console.log(
    censorMessage("This is stupid and idiotic")
)  // This is *** and ***ic
console.log(
    censorMessage("Hello player")
)  // Hello player
console.log(
    censorMessage("")
)  // ""



// Convert full name from "First Last" to "Last, First"
// return: updated name
function formatName(fullName) {
    // your solution here
}

console.log(
    formatName("John Smith")
)  // Smith, John
console.log(
    formatName("Dragon Player")
)  // Player, Dragon
console.log(
    formatName("Incorrect,format")
)  // "Incorrect,format"



// Format date from "YYYY-MM-DD" to "DD.MM.YYYY"
// Don't validate the date "2099-12-24"
// return: updated date
function formatDate(date) {
    // your solution here
}

console.log(
    formatDate("2026-06-01")
)  // 01.06.2026
console.log(
    formatDate("2099-12-24")
)  // 24.12.2099
console.log(
    formatDate("wrong-date")
)  // wrong-date

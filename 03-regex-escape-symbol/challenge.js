// Regex - Escape Symbol

// Detect if there are any special commands in `userInput`.
// `/help` and `/play` are the commands
// if a user types `/help` somewhere in the text, return the message `How can I help you?`
// if a user types `/play` somewhere in the text, return the message `Start a new game.`
// if user types both commands in one sentence, we return the first matched command
// otherwise return the `userInput` text
// `userInput` is a string
function detectCommand(userInput) {
    // your solution here
}
console.log(
    detectCommand("Please help me /help."),
)  // How can I help you?
console.log(
    detectCommand("I want to /play a new game."),
)  // Start a new game.
console.log(
    detectCommand("Hello"),
)  // Hello
console.log(
    detectCommand("/play /help"),
)  // Start a new game.

// Regex - Capturing Groups


// Extract item name and damage value
// itemStats is a string like "Sword +15"
// return: object with item and damage
function extractItemDamage(itemStats) {
    // write your solution here
}

console.log(
    extractItemDamage("Sword +15")
)  // { item: 'Sword', damage: '15' }
console.log(
    extractItemDamage("Bow +8")
)  // { item: 'Bow', damage: '8' }
console.log(
    extractItemDamage("Wrong text")
)  // null

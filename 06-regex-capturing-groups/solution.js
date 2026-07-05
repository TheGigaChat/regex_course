// Regex - Capturing Groups


// Extract item name and damage value
// itemStats is a string like "Sword +15"
// return: object with item and damage
function extractItemDamage(itemStats) {
    const regexPattern = /^([a-z]+)\s\+([0-9]+)$/i
    const matchResult = itemStats.match(regexPattern)

    if (matchResult === null) {
        return null
    }

    return {
        item: matchResult[1],
        damage: matchResult[2]
    }
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



// Alternative solution
function extractItemDamage(itemStats) {
    const pattern = /(?<item>[a-z]+) \+(?<damage>[0-9]+)/i
    const matchResult = itemStats.match(pattern)

    if (matchResult === null) {
        return null
    }

    return matchResult.groups
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

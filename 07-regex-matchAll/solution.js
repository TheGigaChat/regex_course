// Regex - matchAll

// Extract all loot items from the text
// An item must contain item name and item value `Sword +15`
// Items are separated by comma and space like `Sword +15, Shield +8`
// return: array of objects
function extractLootItems(text) {
    const pattern = /([a-z]+) \+([0-9]+)/gi
    const matchResult = text.matchAll(pattern)
    const resultArray = []

    for (const match of matchResult) {
        const matchObject = {item: match[1], value: match[2]}
        resultArray.push(matchObject)
    }

    return resultArray
}
console.log(
    extractLootItems("Sword +15, Shield +8, Potion +50"),
)
// [
//   { item: 'Sword', value: '15' },
//   { item: 'Shield', value: '8' },
//   { item: 'Potion', value: '50' }
// ]

console.log(
    extractLootItems("Bow +25")
)
// [
//   { item: 'Bow', value: '25' }
// ]

console.log(
    extractLootItems("No loot here")
)
// []

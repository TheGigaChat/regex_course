// Regex - Word Boundary

// Count how many times exact word `cat` appears
// do not count `cat` inside bigger words like `catapult`
// or `cat` contains numbers or underscore like `_cat123`
// return: number
function countExactCat(text) {
    // write your solution here
}

console.log(
    countExactCat("Cat and dog"),
)  // 1
console.log(
    countExactCat("cat catapult my cat!"),
)  // 2
console.log(
    countExactCat("_cat123, dog only")
)  // 0


// Count how many times exact keyword `if` appears
// do not count `if` inside bigger words like `gift`
// or `different`
// return: number
function countExactIf(text) {
    // write your solution here
}

console.log(
    countExactIf("if(age >= 18)")
)  // 1

console.log(
    countExactIf("gift different if")
)  // 1

console.log(
    countExactIf("IF, if, If")
)  // 3

console.log(
    countExactIf("gift difficult different")
)  // 0

// Problem : Create an array containing different types of teas .
const teas = [
    "Green tea",
    "Black tea",
    "oolong tea",
    "white tea",
    "Herbal tea",
];

console.log(teas)

// Problem : Add "Chamomile Tea " to the existing list of tea 
teas.push("Chamomile Tea")
console.log(teas)


//Problem : Remove "oolong tea" from the teas .
const index = teas.indexOf("oolong tea") // find the index of oolong tea .
if (index > -1) { // checking if the index exist in array
    teas.splice(index, 1) // removing the item 
        // teas.splice(index, 2) // removing the item and the next item to it ... 
}
console.log(teas)


// problem : Filter the list to only include teas that are caffeinated .
const caffinatedTeas = teas.filter((tea) => tea != "Herbal tea");
console.log(caffinatedTeas)


//Problem : Sort the list of teas in alphabetical order .
console.log(teas.sort())


//Problem : Use a for loop to print each type of tea in the array .
teas.length
for (let i = 1; i <= teas.length; i++) {
    console.log(teas[i])

}


// Problem : Use a for loop to count how many tea are caffeinated (excluding Herbal tea).
let caffeinatedMyTeas = 0;
for (let i = 0; i <= teas.length; i++) {
    if (teas[i] != "Herbal tea") {
        caffeinatedMyTeas++
    }
}
console.log(caffeinatedMyTeas)

// Problem : use a for loop to create a new array with all tea names in uppercase .

const uppercaseTeas = []
for (let i = 0; i < teas.length; i++) {
    uppercaseTeas.push(teas[i].toUpperCase())
}
console.log(uppercaseTeas)
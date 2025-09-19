const teas = [
    "Green tea",
    "Black tea",
    "oolong tea",
    "white tea",
    "Herbal tea",
];

// Problem : Use a for loop to reverse the order of tea in array

const reversedArray = []
for (let i = teas.length - 1; i >= 0; i--) {
    reversedArray.push(teas[i])
}
console.log(reversedArray)
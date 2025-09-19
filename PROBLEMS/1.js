// Create an object representing a type of tea with properties for name , type ,an caffeine ?

const teas = {
    name: "Lemon tea",
    type: "Green",
    caffeine: "Low"
}


// Access and print the name and type properties of the tea object ?

console.log(teas.name)
console.log(teas["type"])

// Add a new property origin to the tea object ?
teas.origin = "assam"
console.log(teas)

// Change the caffiene level of tea to medium ?

teas.caffeine = "Medium"
console.log(teas)


// Remove the type property from the tea object ?

delete teas.type
console.log(teas)

// Check if the tea object has the property Origin ?

console.log("origin" in teas)

// Use a for ....in loop to print all the properties of the Object ?

for (let key in teas) {
    console.log(key + ":" + teas[key])
}
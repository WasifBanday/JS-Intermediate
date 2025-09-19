const teas = {
    name: "Lemon tea",
    type: "Green",
    caffeine: "Low"
}
console.log(teas)


//  Create a copy of the above tea object ? 


const teaCopy = {...teas } // This is shallow copy(using spread operator:  ... ) , because  it only copies first level keys of the object
const anotherteaCopy = teas // Its not a copy , neither shallow copy nor deep copy ,Its actually reference of the memory allocated to teas object ...


console.log(teaCopy)
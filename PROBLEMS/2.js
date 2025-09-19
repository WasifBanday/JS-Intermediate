// Create a nested object representing different types of teas an their properties ?

const myTeas = {
    greenTea: {
        name: "Green Tea",
        IsCaffined: "Yes"
    },
    blackTea: {
        name: "Black Tea",
        IsCaffined: "No"
    }
}
console.log(myTeas)



//  Create a copy of the tea object ?
const teas = {
    name: "Lemon tea",
    type: "Green",
    caffeine: "Low"
}

const teaCopy = {...teas } // This is shallow copy , because  it only copies first level keys of object
const anotherteaCopy = teas // Its not a copy , neither shallow copy nor deep copy , Its actually reference of the memory allocated to teas object ...
console.log(teaCopy)
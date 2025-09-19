//   Deep Copy

let p1 = {
        fname: 'wasif',
        lname: 'hilal',
        address: {
            h: 1,
            street: 2
        }
    }
    // P1 object ko string mai convert karna (JSON.stringify)  method se 
const p1Kastring = JSON.stringify(p1)
console.log(p1Kastring)

// P1 ko waps se object mai convert karna (JSON.parse) method se 
let p2 = JSON.parse(p1Kastring)


p2.fname = 'piyush'
p2.address.h = 'hacked'

console.log(p1)
console.log(p2)

//       SECOND EXAMPLE  


const origin = {
    name: "wasif",
    skills: ["HTML", "CSS"]
};

// Serialization and Deserialization in one step ...
const deepCopy = JSON.parse(JSON.stringify(origin));
deepCopy.skills.push("Java-Script")
    // Now the two objects have different referances , so change in one won't reflect in other...

console.log(origin.skills)
console.log(deepCopy.skills)
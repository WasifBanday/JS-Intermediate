let p1 = {
    fname: 'wasif',
    lname: 'hilal',
    address: {
        h: 1,
        street: 2
    }
}

let p2 = {
    ...p1 // Spread operator 
}

p2.fname = 'piyush' // pass by value

p2.address.h = '10' // Pass by referance

console.log(p1)
console.log(p2)
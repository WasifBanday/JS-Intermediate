let p1 = {
    fname: 'wasif',
    lname: 'hilal',
    adress: {
        h: 1,
        street: 2
    }
}


let p2 = {
    ...p1
}

p2.fname = 'piyush' // pass by value

console.log(p1)
console.log(p2)
const person = {
    x: 10,
    firstName: "wasif",
    hobbies: ['coding', 'gym'],
    isMarried: false,
    hasGF: false,
    hadGF: false,
    hadCrush: Infinity,

    getFullName: function() {
        return 'Wasif Banday'
    },
    // Can make Object in Object as well
    address: {
        hNo: 1,
        street: 1,
        countryCode: 'IN',
        state: 'kashmir'
    }

}

console.log(person.getFullName())
console.log(person.address.state)
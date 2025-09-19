// Shallow copy :- Duplicates only the top level-values properties of object ,
//                  If the object contains nested objects or arrays there referance is only passed not values .


const origin = {
    name: "wasif",
    skills: ["HTML", "CSS"]
};
const shallowcopy = {...origin } //  {...origin}    :-->spread operator syntax

shallowcopy.skills.push("Java-Script"); //  Any change in shallowcopy.skills will reflect to the original -,
//    because they have the same array referance


console.log(origin)
console.log(origin.skills)
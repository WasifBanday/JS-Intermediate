const original = {
    name: "Wasif",
    skills: ["HTML", "CSS"]
};

const deepCopy = JSON.stringify(original);
// deepCopy.skills.push("JavaScript");

console.log(original); // ["HTML", "CSS"]
console.log(deepCopy); // ["HTML", "CSS", "JavaScript"]
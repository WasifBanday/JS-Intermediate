// 90 >= A grade
// 80 >= B grade
// 70 >= C grade
// 60 >= D grade
// 60 <= F grade

// factory template ..

let marks = 70;
let grade;


if (marks >= 90) {
    grade = 'A'
} else if (marks >= 80) {
    grade = 'B'
} else if (marks >= 70) {
    grade = 'C'
} else if (marks >= 60) {
    grade = 'D'
} else {
    grade = 'F'
}

console.log(grade)
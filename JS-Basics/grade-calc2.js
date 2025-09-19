// Doing the same grade question with use of  functions

// 90 >= A grade
// 80 >= B grade
// 70 >= C grade
// 60 >= D grade
// 60 <= F grade

// factory template ..
function calculateGrade(marks){
    if (marks>=90){
        return 'A'
    }
    else if (marks>=80){
        return  'B'
    }else if (marks>=70){
        return 'C'
    }
    else if (marks>=60){
        return 'D'
    }
    else {
        return 'F'
    }
}

console.log(calculateGrade(96))

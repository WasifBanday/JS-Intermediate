//  Doing the same question by using function

let myArray = [1, 2, 4, 5, 6, 7, 8, ]

function sumfac(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
            // sum = sum + numbers[i]

        // sum+=numbers[i]        --> same meaning as above
    }

    return sum;
}
let result = sumfac(myArray);
console.log(result);

let anotherResult = sumfac(myArray);
console.log(`My second result is ${anotherResult}`);
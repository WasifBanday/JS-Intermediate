if (!Array.prototype.myForEach) {
    Array.prototype.myforEach = function(userFn) {
        const originalArr = this; //  "this" Current object ki taraf point krta hai...

        for (let i = 0; i < originalArr.length; i++) {
            userFn(originalArr[i], i);
        }
    };
}


const arr = [1, 2, 3, 4, 5, 6];

// Error : If the .forEach function does not exist on arr varible ..
// -- : No return , function Input , value , index 
// , calls my fn for every value .
// - forEach takes a callback function.
// - That function runs once for each item in the array.



const ret = arr.forEach(function(valuee, indexx) {
    console.log(`My For Each Value at Index ${indexx} is ${valuee}`);
});
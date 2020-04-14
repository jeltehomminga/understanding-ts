"use strict";
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
const add = (n1, n2) => n1 + n2;
function printResult(num) {
    console.log("Result: " + num);
}
const addAndHandle = (n1, n2, cb) => {
    const result = n1 + n2;
    cb(result);
};
addAndHandle(3, 4, result => console.log(result));
// console.log(printResult(add(5, 12)));
let combineValues;
combineValues = add;
// combineValues = printResult
// combineValues = 5
console.log(combineValues(14, 2));

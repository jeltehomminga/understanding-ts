"use strict";
function addBasic(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(`${phrase}${n1 + n2}`);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5;
const number2 = 2.8;
const printVal = true;
const resultPhrase = 'Result is: ';
const result = addBasic(number1, number2, printVal, resultPhrase);

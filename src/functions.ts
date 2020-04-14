// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

const add = (n1: number, n2: number) => n1 + n2;

function printResult(num: number): void {
  console.log("Result: " + num);
}

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result)
};

addAndHandle(3,4, result => console.log(result))

// console.log(printResult(add(5, 12)));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult
// combineValues = 5

console.log(combineValues(14, 2));

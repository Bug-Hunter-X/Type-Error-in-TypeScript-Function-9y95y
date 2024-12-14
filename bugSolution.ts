function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

let result = add(1, 2); // Correct usage

let result2: number;

let num1 = 1;
let num2 = "2";
if (isNumber(num2)) {
  result2 = add(num1, num2);
} else {
  result2 = add(num1, parseInt(num2, 10)); // Solution: Parse the string to number
}
console.log(result2); // Output: 3 
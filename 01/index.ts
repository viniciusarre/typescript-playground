// types as parameters
const squareOf = (n: number) => {
    return Math.pow(n, 2);
}

console.log(squareOf(2) === 4)

// unknown value
const a: unknown = 30
const b = a === 123 //boolean
const c = a + 10 // throws an error. unknown type must be checked first.
const d = typeof a === 'number' ? a + 10 : 0 // checks typeof before using it.

// boolean
const assigning: boolean = true;
const l: true = false; // should throw; type literal
let literal: true 

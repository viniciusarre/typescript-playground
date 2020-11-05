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

//bigint

let a = 1234n;

// symbol

const v: unique symbol = Symbol('v')
typeof v;

// objects 
let obj: {
    a: number,
    b: number,
    c: string,
};

obj.a = 1;
obj.b = 2;
obj.c = 'string value';
obj.c = 'askldjsadkjdjlksadj kasjdlkadjkljdlk';

obj.d = 'should throw!!';

obj = {} // cannot be assigned again

obj = Object.assign({}, { a: 1, b: 2, c: '3' })
// passes

obj = Object.assign({}, { a: 1, b: 2, c: 3, d: 11 })
// doesn't pass

let obj2: {
    a: number,
    b: number,
    c: number,
    d?: number,
    e?: {
        val: string
    };
    [key: number]: boolean
};


obj2 = Object.assign({}, { a: 1, b: 2, c: 3 })
// passes

obj2 = Object.assign({}, { a: 1, b: 2, c: 3, d: 11 })
// passes

obj2 = Object.assign({}, { a: 1, b: 2, c: 3, d: 11 }, { e: { val: "hello!" } })


obj2 = Object.assign({}, { a: 1, b: 2, c: 3, d: 11 }, { bool1: true, b2: false, b3: (1 === 1), b4: (-1 > 0) })

obj2 = { a: 1, b: 2, c: 3, d: 11, f: 10000 };

obj2 = { a: 1, b: 2, c: 3, d: 11, 1: true, 2: false, 3: (1 === 1), 4: 'a string' };

const obj3: {
    readonly test: string;
} = {
    test: 'readonly value'
}

obj3.test = 'write';
// should throw



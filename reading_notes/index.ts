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


type Age = number;
type Person = {
    name: string
    age: Age
}
const age: Age = 55;
let driver: Person = {
    name: 'James May',
    age
}

type Cat = { name: string, purrs: boolean }
type Dog = { name: string, barks: boolean, wags: true }
type CatOrDog = Cat | Dog;
type CatAndDog = Cat & Dog;

let f: CatOrDog = {
    name: 'Bonkers',
    purrs: true
}

f = {
    name: 'Domino',
    barks: true,
    wags: true,
}


f = {
    name: 'Donkers',
    barks: true,
    purrs: false,
    wags: true
}

// arrays
const stringArray: string[] = [
    'only strings can be added',
    'this is another string',
    'yet another one'
];

const numberArray: number[] = [
    0,
    1,
    2,
    3
];

const catArray: [Cat] = [
    {
        name: 'Donkers',
        purrs: false,
    }
]

stringArray.push('string');
numberArray.push(Math.PI);
catArray.push({ name: 'cat', purrs: false });


const mixedType: (string | number | boolean)[] = [
    'string',
    1000,
    'or',
    292932,
    'number',
    true,
    false,
    !!!false
]

mixedType.push(Math.PI)
mixedType.push('stringval');
mixedType.push(true);

// tuples
const programmingLanguages: [string, string, string] = [
    'Rust',
    'Javascript',
    'Python',
    // 'this line will throw'
]

programmingLanguages.push('s')

// readonly arrays
const arr: readonly number[] = [
    21,
    1,
    0,
    Math.E,
    Math.PI
];
// will throw
// arr.push(22)


const arr2: ReadonlyArray<string> = [
    'A',
    'read-only',
    'string',
    'array'
];
// will also throw
// arr2.push('skjsdksj')
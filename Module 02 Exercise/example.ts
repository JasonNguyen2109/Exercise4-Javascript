// let x: number;   //* Explicitly declares x as a number type
// let y = 1;       //* Implicitly declares y as a number type
// let z;           //* Declares z without initializing it

let flag: boolean;
let yes = true;
let no = false;

let x: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n;

let s: string;
let empty = "";
let abc = 'abc';

let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);

enum ContractStatus {
    Permanent,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);

//Any type-------------------------------------------------------|
let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK

console.log(randomValue.name);  // Logs "undefined" to the console
randomValue();                  // Returns "randomValue is not a function" error
randomValue.toUpperCase();      // Returns "randomValue is not a function" error

// Unknown Type--------------------------------------------------|
console.log(randomValue.name);  // Logs "undefined" to the console
randomValue();                  // Returns "randomValue is not a function" error
randomValue.toUpperCase();      // Returns "randomValue is not a function" error

//Type Assertion----------------------------------------------------------------|
// let randomValue: unknown = 10;

// randomValue = true;
// randomValue = 'Mateo';

// if (typeof randomValue === "string") {
//     console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
// } else {
//     console.log("Error - A string was expected here.");    //* Returns an error message.
// }


//UNION Types --------------------------------------------------|
let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
//multiType = "twenty";   //* Invalid

function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error


//Literal Types ----------------------------------|

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
//myResult = "failure";       //* Invalid

//Arrays------------------------------------------|
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];


//Tuples-------------------------------------------|
let person1: [string, number] = ['Marcia', 35];

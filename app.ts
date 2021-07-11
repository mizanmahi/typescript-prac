const add = (n1: number, n2: number) => n1 + n2;

console.log(add(5, 8));

// basics
/*
types: number, string, boolean
*/

// let n1 = 6; // its automatically inferred as a number type
// let n2: number; // here we have to add the type explicitly

// same goes for string and boolean

//---------------------------------------------------
/*
types: object
*/

let person = {
   name: "Mizan",
   age: 25,
}; /* this is inferred as this type
  {
    name: string;
    age: number;
  }
*/

/*
types: array
*/

let arr = [5, 6, 88]; // this is inferred as array of number type
let arr1: number[]; // this is the same as before

let arr2: (string | number)[]; // mixed array of number and string 
arr2 = [5, "5"]

let arr3: number[] | string[]; // this is a type of array with all the number or all the string

// --------------------------------------------------


/*
types: tuple and enum
*/

let myTuple: [number, string, boolean] = [3, "mizan", true] // order of type and size matters

enum Role { ADMIN, AUTHOR, USER}; // ADMIN WILL GET 1 SO ON
enum Role1 { ADMIN = 5, AUTHOR, USER}; // ADMIN WILL GET 5 SO ON

// -------------------------------

console.log(Role)

let obj = {
    role: Role.ADMIN
}

if(obj.role === Role.ADMIN){
    console.log("is admin")
}

// ------------------------

/*
 function as types 
*/ 

// generic function type
const addnumbers: Function = (n: number, n1: number) => {
    return n + n1;
}

// explicit or literal functio type
const addThreeNumbers: (name: string) => void = (name) => {
    console.log(name);
    
}

addThreeNumbers("Mizanur rahman")

// never and unknown type

function generateError(error: string, number: number): never{
    throw {error, number} // it never returns anything not even undefined as we are thrwing an error
}

let who: unknown; // when we dont know the type of who in advance
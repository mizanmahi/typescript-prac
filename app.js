var add = function (n1, n2) { return n1 + n2; };
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
var person = {
    name: "Mizan",
    age: 25
}; /* this is inferred as this type
  {
    name: string;
    age: number;
  }
*/
/*
types: array
*/
var arr = [5, 6, 88]; // this is inferred as array of number type
var arr1; // this is the same as before
var arr2; // mixed array of number and string 
arr2 = [5, "5"];
var arr3; // this is a type of array with all the number or all the string
// --------------------------------------------------
/*
types: tuple and enum
*/
var myTuple = [3, "mizan", true]; // order of type and size matters
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
; // ADMIN WILL GET 1 SO ON
var Role1;
(function (Role1) {
    Role1[Role1["ADMIN"] = 5] = "ADMIN";
    Role1[Role1["AUTHOR"] = 6] = "AUTHOR";
    Role1[Role1["USER"] = 7] = "USER";
})(Role1 || (Role1 = {}));
; // ADMIN WILL GET 5 SO ON
// -------------------------------
console.log(Role);
var obj = {
    role: Role.ADMIN
};
if (obj.role === Role.ADMIN) {
    console.log("is admin");
}
// ------------------------
/*
 function as types
*/
// generic function type
var addnumbers = function (n, n1) {
    return n + n1;
};
// explicit or literal functio type
var addThreeNumbers = function (name) {
    console.log(name);
};
addThreeNumbers("Mizanur rahman");

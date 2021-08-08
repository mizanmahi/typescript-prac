const names: Array<string> = ['Mizan', 'Kamal']; // Array<string> this is generic type for better typescript type support, basically giving ts some informatio about the data it returns or store in this case

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});

// promise.then(str => console.log(str));

// custom generics
/* function merge<T, U>(objA: T, objB: U){
    return Object.assign(objA, objB);
}

const merged = merge({firstName: 'mizan'}, {lastName: 'mahi'});

console.log(merged.firstName);  */

// custom generics with constraint
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const merged = merge({firstName: 'mizan'}, 3); // now this will give an error second argument also must have to be an object
const merged = merge({ firstName: 'mizan' }, { lastName: 'mahi' });

// console.log(merged.firstName);

interface lengthy {
  length: number;
}

function countAndPrint<T extends lengthy>(element: T): [T, string] {
  let description = 'Got no value!';

  element.length === 1
    ? (description = `Got ${element.length} value`)
    : (description = `Got ${element.length} values`);

  return [element, description];
}

console.log(countAndPrint('Mizan Mahi')); // returning a tuple where first element is generic type and second element is of a string type

// the keyof constraints
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: 'mizan' }, 'name');

// generic classes
const arrOfObj = [{ name: 'mizan' }, { age: 25 }];
console.log(arrOfObj.indexOf({ name: 'mizan' })); // -1

// generic utility types
// partial types
// readonly

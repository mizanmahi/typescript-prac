"use strict";
const names = ['Mizan', 'Kamal'];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const merged = merge({ firstName: 'mizan' }, { lastName: 'mahi' });
function countAndPrint(element) {
    let description = 'Got no value!';
    element.length === 1
        ? (description = `Got ${element.length} value`)
        : (description = `Got ${element.length} values`);
    return [
        element,
        description
    ];
}
console.log(countAndPrint("Mizan Mahi"));

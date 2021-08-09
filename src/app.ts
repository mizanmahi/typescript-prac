// Decorators

// decorator for the class
/* function Logger(constructor: Function){
  console.log('Decoratot ran...');
  console.log(constructor);
}

// decorator for the method greet
function LogMethod(target: any, name: string, descriptor: PropertyDescriptor){
 descriptor.enumerable = true;
 console.log(target); // basically the constructor of this method
 console.log(name); // greet, the name of method
 console.log(descriptor); // {value: [Function: greet],writable: true,enumerable: true,configurable: true}
}

 @Logger
class Person {
  name = 'Mizan';

  constructor(){
    console.log('Constructor ran...');
    
  }

  @LogMethod // decorator to make this method enumerable 
  greet(greet: string){
    console.log(`${greet} ${this.name}`);
    return 'string'
  }
}

const mizan = new Person(); */
// console.log(mizan);

/* for(const key in mizan){
  console.log(key); // name and greet will be printed as we apply the LogMethod decorator in the greet method
} */

// ! decorator factories -------------------

/* function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// ? This is a decorator factory and now we can pass parameter in the decorator
@Logger('Decorator factory ran...')
class Person {
  name = 'Mizan';

  constructor() {
    console.log('Constructor ran...');
  }

  greet(greet: string) {
    console.log(`${greet} ${this.name}`);
    return 'string';
  }
}

const mizan = new Person();
// console.log(mizan); */

// ! a more usefull decorator

function RenderTemplate(template: string, selectorId: string) {
  return function (target: any) {
    const selectedEl = document.getElementById(selectorId)!;
    if (selectorId) {
      selectedEl.innerHTML = template;
    }
  };
}

@RenderTemplate('<h1>Your Render template decorator is working!</h1>', 'app')
class Component {}

/* 
? order of decorator execution and multiple decorator 
  * Decorator runs from top to bottom manner means last applied decorator runs first 
  * but the decorator factory's outer function runs first but the inner decorator run bottom to top
*/

// ! Property decorator, method decorator, accessor decorator

function Log(target:any, propName: string) { // property decorator
  console.log({propName, target});
  console.log('Prperty decorator');
  
}

function LogMethod(target:any, targetName: string, descriptor: PropertyDescriptor) {// method decorator
  console.log({target, targetName, descriptor});
  console.log('Method decorator');
  
  
}
function LogAccessor(target:any, targetName: string, descriptor: PropertyDescriptor) {// accessor decorator
  console.log({target, targetName, descriptor});
  console.log('Accessor decorator');
  
  
}

class ProDuct {
  @Log 
  title: string;
  constructor(private _price: number, t: string) {
    this.title = t;
  }

  @LogAccessor
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error('Price must be greater than 0');
    }
  }

  @LogMethod
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

// ! examples : ------------------

function BindThis(target:any, propName: string, descriptor: PropertyDescriptor) {
  
}

class Printer {
  message = 'Hi There!';

  @BindThis
  log() {
    console.log(this.message);
  }
}

const print1 = new Printer();
const button = document.querySelector("button");

button?.addEventListener('click', print1.log)
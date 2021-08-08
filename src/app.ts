// Decorators

// decorator for the class
function Logger(constructor: Function){
  console.log('Decoratot ran...');
  console.log(constructor);
}

// decorator for the method greet
function LogMethod(target: any, name: string, descriptor: PropertyDescriptor){
 descriptor.enumerable = true;
 console.log(target);
 console.log(name); // greet, the name of method
 console.log(descriptor); // {value: [Function: greet],writable: true,enumerable: true,configurable: true}
}

// @Logger
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

const mizan = new Person();
// console.log(mizan);

/* for(const key in mizan){
  console.log(key); // name and greet will be printed as we apply the LogMethod decorator in the greet method
} */

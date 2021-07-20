// interfaces
// usually describe how an onject should look like

// declaration
interface Animal {
   // this could be used as a structure of an aobject
   name: string;
   color: string;
   eatable: boolean;
   age: number;
   info(): void;
}

let cow: Animal;

cow = {
   name: "Bagha",
   color: "red",
   eatable: true,
   age: 5,
   info: () => {},
};

// ----- with classes -------

interface Greetable {
   name: string;
   greet(): void;
}

class Greet implements Greetable {
   // Greet must implement the Greeadable interface
   name: string;

   constructor(n: string) {
      this.name = n;
   }

   greet() {
      console.log("This is implemented on greetable interfaces");
   }
}

const greet = new Greet("Hello there!");

greet.greet();

// ------ readonly property, extending interfaces  ---------

interface other {
   book: string;
}

interface book extends other {
   readonly pages: number; // interfaces can have readonly property
}

class Book implements book {
   constructor(public book: string, readonly pages: number) {} // page should have as read only property
}

// ----------- ----------- interface as a type of function -----------

interface addfn {
   // exception: this could be uses as a type of function. because in the end of the day function is also an object
   (a: number, b: number): number;
}

let addFn: addfn;

addFn = (x: number, y: number) => {
   return x + y;
};


//--------- optional parameter and properties ----------------------
interface others {
   animal?: string; // optional
   people: string;
}

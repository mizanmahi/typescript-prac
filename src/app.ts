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



interface Greetable {
   name: string;
   greet(): void;
}

class Greet implements Greetable { // Greet must implement the Greeadable interface
   name: string;

   constructor(n: string) {
      this.name = n;
   }

   greet() {
      console.log("This is implemented on greetable interfaces");
   }
}

const greet = new Greet("Hello there!")

greet.greet()
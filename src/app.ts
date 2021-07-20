class Department {
   //    public name: string;
   //    private id: number;
   //    constructor(n: string, id: number) {
   //       this.name = n;
   //       this.id = id;
   //    }

   // this is the same as above initializaton of property, private and public modifier are mendatory here, this will automatically crate the properties named nmae and id
   constructor(public name: string, private id: number) {} // shrthand initialization

   // here we can pass "this" as a parameter in typescipt, this will ensure that this method always refer to the instance of this particular class
   info(this: Department) {
      console.log("Department: " + this.name + " and the id is: " + this.id);
   }
}

const dept = new Department("CSE", 19320002);
dept.info()
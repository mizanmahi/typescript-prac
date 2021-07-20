abstract class Department {
   constructor(
      public readonly name: string,
      private id: number,
      protected employees: string[]
   ) {} // shrthand initialization

   abstract describe(): void;
  
}

class ItDept extends Department {
   constructor(id: number, public admin: string[]) {
      super("IT", id, []);
   }

   // all class extended by the Department must implement this method
   describe(){
      console.log("Department name is: " + this.name);
   }
}

//const dept = new Department("Cse", 2569, []); //Cannot create an instance of an abstract class

const it = new ItDept(2365, [])
it.describe()


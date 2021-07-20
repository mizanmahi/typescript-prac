class Department {
   constructor(
      public readonly name: string,
      private id: number,
      protected employees: string[]
   ) {} // shrthand initialization

   info(this: Department) {
      console.log("Department: " + this.name + " and the id is: " + this.id);
      console.log(this.employees);
   }

   get printId(){ // getter 
       return this.id
   }

   set changeId(newId: number){ //setter
       if(newId > 100) throw new Error("Id must be less than 100");
       this.id = newId;
   }

   addEmployee(employe: string) {
      this.employees.push(employe);
   }
}

class ItDept extends Department {
   constructor(id: number, public admin: string[]) {
      super("IT", id, []);
   }
   printAdmin() {
      console.log(this.admin);
   }

   addEmployee(employee: string){ // overriding trhe method of base class
       if(employee === "mizan") return;
       this.employees.push(employee); // this works bcz employees array are now protected not private
   }
}

const dept = new Department("CSE", 19320002, ["Rafsan emp", "Rana emp"]);
const It = new ItDept(19520005, ["Mizan", "kamal"]);

console.log(dept);
console.log(It);

It.addEmployee("mizan");
It.addEmployee("Milon");

It.info()
console.log(It.printId);

It.changeId =25;

console.log(It.printId);
//console.log(It.id); // id is private so can't be accessed like this


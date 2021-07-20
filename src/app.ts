class Department {
   name: string;

   private employees: string[] = [];

   constructor(n: string) {
      this.name = n;
   }

   // here we can pass "this" as a parameter in typescipt, this will ensure that this method always refer to the instance of this particular class
   info(this: Department) {
      console.log("Department: " + this.name);
   }

   addemployee(name: string) {
      this.employees.push(name);
   }

   printEmployeeInfo() {
      console.log(`Total number of employee is ${this.employees.length}`);
      console.log(this.employees);
   }
}

const dept = new Department("CSE");
dept.info(); // Department: CSE

// const deptCopy = { info: dept.info, name: 'Accounting' };
// deptCopy.info(); // Department: undefined

dept.addemployee("Mizan"); // can do this
dept.addemployee("Kamal"); // can do this
//dept.employees[2] = "showkhin"; // can't do this, cuz this is a private property of Department class

dept.printEmployeeInfo();

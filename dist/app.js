"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    info() {
        console.log("Department: " + this.name);
    }
    addemployee(name) {
        this.employees.push(name);
    }
    printEmployeeInfo() {
        console.log(`Total number of employee is ${this.employees.length}`);
        console.log(this.employees);
    }
}
const dept = new Department("CSE");
dept.info();
dept.addemployee("Mizan");
dept.addemployee("Kamal");
dept.printEmployeeInfo();

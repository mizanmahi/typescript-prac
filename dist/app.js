"use strict";
class Department {
    constructor(name, id, employees) {
        this.name = name;
        this.id = id;
        this.employees = employees;
    }
    info() {
        console.log("Department: " + this.name + " and the id is: " + this.id);
        console.log(this.employees);
    }
    addEmployee(employe) {
        this.employees.push(employe);
    }
}
class ItDept extends Department {
    constructor(id, admin) {
        super("IT", id, []);
        this.admin = admin;
    }
    printAdmin() {
        console.log(this.admin);
    }
    addEmployee(employee) {
        if (employee === "mizan")
            return;
        this.employees.push(employee);
    }
}
const dept = new Department("CSE", 19320002, ["Rafsan emp", "Rana emp"]);
const It = new ItDept(19520005, ["Mizan", "kamal"]);
console.log(dept);
console.log(It);
It.addEmployee("mizan");
It.addEmployee("Milon");
It.info();

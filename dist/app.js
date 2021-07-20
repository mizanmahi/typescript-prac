"use strict";
class Department {
    constructor(name, id, employees) {
        this.name = name;
        this.id = id;
        this.employees = employees;
    }
}
class ItDept extends Department {
    constructor(id, admin) {
        super("IT", id, []);
        this.admin = admin;
    }
    describe() {
        console.log("Department name is: " + this.name);
    }
}
const it = new ItDept(2365, []);
it.describe();

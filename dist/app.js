"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    info() {
        console.log("Department: " + this.name + " and the id is: " + this.id);
    }
}
class ItDept extends Department {
    constructor(id, admin) {
        super("IT", id);
        this.admin = admin;
    }
    printAdmin() {
        console.log(this.admin);
    }
}
const dept = new Department("CSE", 19320002);
const It = new ItDept(19520005, ["Mizan", "kamal"]);
console.log(dept);
console.log(It);

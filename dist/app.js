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
const dept = new Department("CSE", 19320002);
dept.info();

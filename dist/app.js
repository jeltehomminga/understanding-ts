"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Department " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
const schoenen = new Department("schoenen");
const schoenenCopy = { name: "DUMMY", describe: schoenen.describe };
console.log(schoenen);
schoenen.describe();
// schoenenCopy.describe();    
schoenen.employees[0] = 'Dessy';
console.log(schoenen.employees);

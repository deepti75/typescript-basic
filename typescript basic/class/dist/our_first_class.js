"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log(`Department is ${this.name}`);
    }
}
let accounting = new Department("Accounting");
console.log(accounting);
console.log(accounting.name);
accounting.describe();
let newAccounting = { name: "Test", describe: accounting.describe };
newAccounting.describe();

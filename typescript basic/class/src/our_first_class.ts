class Department{
    name : string;
    constructor(n:string){
        this.name = n;
    }
    describe(this:Department){
        console.log(`Department is ${this.name}`)
    }
}

let accounting = new Department("Accounting");
console.log(accounting);
console.log(accounting.name);

accounting.describe();

let newAccounting ={name :"Test",describe : accounting.describe};
newAccounting.describe();
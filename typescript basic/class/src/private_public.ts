//private and public


class Department1{
    name : string;
   private employess:string[] =[];
    constructor(n:string){
        this.name = n;
    }
    describe(this:Department1){
        console.log(`Department1 is ${this.name}`)
    }
    addEmp(emp:string){
        this.employess.push(emp)
    }
    printNoEmp(){
        console.log(`${this.employess.length}`)
    }
}

let accounting1 = new Department1("Accounting");
console.log(accounting1);
accounting1.addEmp("deepti");
accounting1.addEmp("jawleksr");
console.log(accounting1.name);
console.log(accounting1);
accounting1.printNoEmp();
// accounting1.employess[2] ="khkhkh";
console.log(accounting1);

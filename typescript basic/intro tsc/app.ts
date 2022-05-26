//function return type and void
type Addfun =(n1:number,n2:number) => number;
function add(n1:number,n2:number):number{
    return n1 + n2;
}

function combine(str1:string,str2:string):string{
    return `${str1} ${str2}`;
}

// function newadd(n1:number,n2:number):undefined{
//     console.log(n1 + n2);
//     return;
// }
// console.log(newadd(20,30))  //it returns undefined

// function newadd(n1:number,n2:number):void{
//     console.log(n1 + n2);
// }
// console.log(newadd(20,30)) // it does not return anything or which does not content return statement then return that type of function is void 

// function printValueNumber(num:number){
//     console.log(`this is ${num}`);
// }


let add2:Addfun= add;
let result = add2(2,3);
console.log(result);











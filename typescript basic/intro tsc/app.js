//function return type and void
function add(n1, n2) {
    return n1 + n2;
}
function combine(str1, str2) {
    return "".concat(str1, " ").concat(str2);
}
// function newadd(n1:number,n2:number):undefined{
//     console.log(n1 + n2);
//     return;
// }
// console.log(newadd(20,30))  //it returns undefined
function newadd(n1, n2) {
    console.log(n1 + n2);
}
console.log(newadd(20, 30)); // it does not return anything or which does not content return statement then return that type of function is void 

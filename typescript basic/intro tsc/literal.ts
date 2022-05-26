//union type 

function combine(num1:number | string ,num2:number | string ,resultConversion:"as-number" | "as-string"){
    let result 
   if(typeof num1 === 'number' && typeof num2 === 'number' || resultConversion === "as-number"){
     result = +num1 + +num2;
   }else{
       result = num1.toString() + num2.toString();
   }
//    if(resultConversion === 'as-number'){
//     return +result;
//     }else{
//     return result.toString();
//     }
   return result;
}
let add1 = combine(20,30,'as-number');
console.log(add1 ,typeof add1);

let com1 = combine("20","30",'as-number');
console.log(com1, typeof com1);

let com2 = combine(20,30,'as-string');
console.log(com2, typeof com2);

let com3 = combine("20","30",'as-string');
console.log(com3, typeof com3)
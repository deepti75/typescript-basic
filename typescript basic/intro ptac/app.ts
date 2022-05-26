
type Combinable =number | string;
type ConversionDescription = "as-number" |"as-string";

function combine(num1:Combinable,num2:Combinable, resultconversion :ConversionDescription){
    let result
    if(typeof num1 === "number" && typeof num2 === "number" ){
        result =num1 + num2;
    }else{
        result = num1.toString()+ num2.toString();
    }
    return result;
}

let add = combine(10,20,"as-number");
console.log(add, typeof add);

let add1 = combine("10","20","as-string")
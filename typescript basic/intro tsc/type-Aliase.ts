//type alise costum type
type Combinable =number | string;
type ConversionDescription ="as-number" | "as-string";
function combine(num1:Combinable,num2:Combinable ,resultConversion:ConversionDescription){
    let result 
   if(typeof num1 === 'number' && typeof num2 === 'number' || resultConversion === "as-number"){
     result = +num1 + +num2;
   }else{
       result = num1.toString() + num2.toString();
   }
   return result;
}

let add1 = combine(20,30,'as-number');
console.log(add1 ,typeof add1);

let com1 = combine("20","30",'as-number');
console.log(com1, typeof com1);

let com2 = combine(20,30,'as-string');
console.log(com2, typeof com2);

let com3 = combine("20","30",'as-string');
console.log(com3, typeof com3);

type Productn ={ 
    id :string;
    price: number;
    tags: string[]; 
    details: 
    {
        title:string;
        description: string;
    }
}
const product1:Productn = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }
const product2:Productn  = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }
let  proucts:Productn[] = [product1,product2];
console.log(proucts)
  let skills : string[]=['Angular','node','Express'];


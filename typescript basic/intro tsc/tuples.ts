let person :{name :string, age : number, hobbies:string[], role:[number, string]}={
    name :"deepti",
    age : 23,
    hobbies:["cooking","cooking","Drawing"],
    role : [2,"Admin"],
}

console.log(person.name);

console.log(person.age);

for(let hobby of person.hobbies){
    console.log(hobby.toLowerCase());
}

// person.role.push("super");
// console.log(person);    //drawback

person.role=[25,"frrr"];
console.log(person);






























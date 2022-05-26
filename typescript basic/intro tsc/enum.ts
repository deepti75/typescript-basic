//Enums
enum Role {ADMIN = 100, READ_ONLY_USER, SUPER_ADMIN};
let person1 = {
    fname : "Deepti",
    lname:"Jawlekar",
    email:"jawlekar@gmail.com",
    token:"qw",
    role:Role.ADMIN,
}

if (person1.role === Role.ADMIN){
    console.log("this is admin");
}

if (person1.role === Role.READ_ONLY_USER){
    console.log("this is a candidate");
}

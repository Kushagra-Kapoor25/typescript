"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let User = {
    name: "Kushagra",
    email: "kush@gmail.com",
    isActive: true,
};
let newUser = { name: "Kushagra", isPaid: false, email: "kush@gmail.com" };
function createCourse() {
    return { name: "Ts", price: 2300 };
}
function makeUser(user) {
    return { name: "", email: "", isActive: true };
}
console.table(makeUser({ name: "", email: "", isActive: false }));
let employee = {
    _id: "1234",
    name: "Kushagra",
    email: "kush@gmail.com",
    isActive: true,
};
employee.name = "k@gmail.com";
console.log(employee);

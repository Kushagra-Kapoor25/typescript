"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Kushagra",
    email: "kush@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, bool = _a.isPaid;
}
var newUser = { name: "Kushagra", isPaid: false, email: "kush@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "Ts", price: 2300 };
}
function makeUser(user) {
    return { name: "", email: "", isActive: true };
}
console.table(makeUser({ name: "", email: "", isActive: false }));
var employee = {
    _id: "1234",
    name: "Kushagra",
    email: "kush@gmail.com",
    isActive: true,
};
employee.name = "k@gmail.com";
console.log(employee);

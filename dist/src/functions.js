"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password, isPaid) {
    console.table([name, email, password, isPaid]);
}
let loginUser = (email, password, isPaid = false) => {
    console.table([email, password, isPaid]);
};
let myValue = addTwo(5);
console.log(myValue);
getUpper("Kush");
signUpUser("Kushagra", "kush@gmail.com", "123456", true);
loginUser("kush", "kush@gmail.com");
const getHello = (s) => {
    return "";
};
const heros = ["thor", "spiderman", "ironman"];
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    throw new Error(errmsg);
}
consoleError("Something went wrong");

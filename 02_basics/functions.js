"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase() -> not allowed
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password, isPaid) {
    console.table([name, email, password, isPaid]);
}
var loginUser = function (email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.table([email, password, isPaid]);
};
var myValue = addTwo(5);
console.log(myValue);
getUpper("Kush");
signUpUser("Kushagra", "kush@gmail.com", "123456", true);
loginUser("kush", "kush@gmail.com");
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    throw new Error(errmsg);
}
consoleError("Something went wrong");

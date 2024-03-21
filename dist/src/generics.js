"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score = [];
const names = [];
function identity(val) {
    return val;
}
console.log(identity("5"));
function identityOne(val) {
    return val;
}
console.log(identityOne(true));
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(val1, val2) {
    return {
        val1,
        val2,
    };
}
console.log(anotherFunction(3, "four"));
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}

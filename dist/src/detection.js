"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        console.log(pet);
        return "Fish Food";
    }
    else {
        console.log(pet);
        return "Bird Food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.width * shape.length;
        default:
            let _defaultforshape = shape;
            return _defaultforshape;
    }
}

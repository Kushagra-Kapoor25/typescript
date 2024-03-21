"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let score = 33;
score = 44;
score = "55";
let kush = { name: "kushagra", id: 123 };
kush = { username: "kushagra", id: 412 };
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        console.log(id + 2);
    }
}
const data = [1, 2, 3, 4, 5, 6, 7];
const data2 = ["1", "2", "3", "4"];
const data3 = [1, 2, "3", "4", true];
let pi = 3.14;
let seatAllotment;

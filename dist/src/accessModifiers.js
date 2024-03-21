"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Bangalore";
        this.email = email;
        this.name = name;
    }
    get getAppleEmail() {
        return `apple.${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course Count should be more than 1");
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    chageCourseCount() {
        this._courseCount = 4;
    }
}
const kush = new User("kushagra@gmail.com", "kushagra", "1234");

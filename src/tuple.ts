const user: (string | number)[] = [1, "kushagra"];

let user1: [string, number, boolean];

user1 = ["kush", 120, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [112, "example@gmail.com"];
newUser[0] = 123;
newUser[1] = "hc.com";

export {};

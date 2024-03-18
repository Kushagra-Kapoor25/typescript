let score: number | string = 33;

score = 44;

score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let kush: User | Admin = { name: "kushagra", id: 123 };
kush = { username: "kushagra", id: 412 };

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    console.log(id + 2);
  }
}

const data: number[] = [1, 2, 3, 4, 5, 6, 7];
const data2: string[] = ["1", "2", "3", "4"];
const data3: (string | number | boolean)[] = [1, 2, "3", "4", true];

let pi: 3.14 = 3.14;
// pi = 3.145 not allowed

let seatAllotment: "aisle" | "middle" | "window";
// seatAllotment = "crew"; not allowed

let User = {
  name: "Kushagra",
  email: "kush@gmail.com",
  isActive: true,
};

// function createUser({ name: string, isPaid: boolean }): void {}

let newUser = { name: "Kushagra", isPaid: false, email: "kush@gmail.com" };
// createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "Ts", price: 2300 };
}

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function makeUser(user: User): User {
  return { name: "", email: "", isActive: true };
}

console.table(makeUser({ name: "", email: "", isActive: false }));

type Employee = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let employee: Employee = {
  _id: "1234",
  name: "Kushagra",
  email: "kush@gmail.com",
  isActive: true,
};

employee.name = "k@gmail.com";
console.log(employee);

// employee._id = "1231234";

type cardDate = {
  carddate: string;
};

type cardNumber = {
  cardnumber: string;
};

type cardDetails = cardDate &
  cardNumber & {
    cvv: string;
  };

export {};

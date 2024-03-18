function addTwo(num: number): number {
  // num.toUpperCase() -> not allowed
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {
  console.table([name, email, password, isPaid]);
}

let loginUser = (email: string, password: string, isPaid: boolean = false) => {
  console.table([email, password, isPaid]);
};

let myValue = addTwo(5);
console.log(myValue);

getUpper("Kush");
signUpUser("Kushagra", "kush@gmail.com", "123456", true);

loginUser("kush", "kush@gmail.com");

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): never {
  throw new Error(errmsg);
}

consoleError("Something went wrong");

export {};

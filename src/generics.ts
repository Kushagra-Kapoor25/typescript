const score: Array<number> = [];
const names: Array<string> = [];

function identity<Type>(val: Type): Type {
  return val;
}

console.log(identity("5"));

// Short hand

function identityOne<T>(val: T): T {
  return val;
}

console.log(identityOne(true));

interface Bottle {
  brand: string;
  type: number;
}

// identityOne<Bottle>({});

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 4;
  return products[myIndex];
};

function anotherFunction<T, U>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

console.log(anotherFunction(3, "four"));

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

export {};

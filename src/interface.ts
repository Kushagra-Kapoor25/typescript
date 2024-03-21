interface User {
  readonly dbId: number;
  email: string;
  userNumber: string;
  googleId?: string;
  //startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken: string;
}

const kushagra: User = {
  dbId: 12,
  githubToken: "1234",
  email: "Kush@gmail.com",
  userNumber: "1234",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "Kushagra", off: 10) => {
    return 10;
  },
};

kushagra.email = "k@12.com";
// kushagra.dbId = 123; not allowed

interface Admin extends User {
  isAdmin: boolean;
  role: "admin" | "ta" | "learner";
}

const kz: Admin = {
  dbId: 123,
  githubToken: "1234",
  email: "Kush@gmail.com",
  userNumber: "123",
  isAdmin: false,
  role: "ta",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "Kushagra", off: 10) => {
    return 10;
  },
};

export {};

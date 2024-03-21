/*
class User {
  public email: string;
  private name: string;
  readonly city: string = "Jaipur";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}
 */

class User {
  protected _courseCount = 1;
  readonly city: string = "Bangalore";
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {
    this.email = email;
    this.name = name;
  }

  get getAppleEmail(): string {
    return `apple.${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Course Count should be more than 1");
    }
    this._courseCount = courseNum;
  }

  private deleteToken() {
    console.log("Token deleted");
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  chageCourseCount() {
    this._courseCount = 4;
  }
}

const kush = new User("kushagra@gmail.com", "kushagra", "1234");

export {};

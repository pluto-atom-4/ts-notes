// Exercise 1
class Car {

  private _acceleration: number;

  constructor(public name: string) {
    this._acceleration = 0;
  }

  honk() {
    console.log("Toooot!");
  }

  accelerate(speed: number) {
    this._acceleration = this._acceleration + speed;
  }

  get acceleration() {
    return this._acceleration;
  }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);


// Exercise 2

abstract class BaseObject {
  width = 0;
  length = 0;
}

class Rectangle extends BaseObject {

  constructor() {
    super();
    this.width = 5;
    this.length = 10;
  }

  calcSize() {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle();
console.log(rectangle.calcSize());

// Exercise 3
class MyPerson {
  private _firstName: string = "";

  get firstName() {
    return this._firstName;
  }

  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = "";
    }
  }
}

const myPerson = new MyPerson();
console.log(myPerson.firstName);
myPerson.firstName = "Ma";
console.log(myPerson.firstName);
myPerson.firstName = "Maximilian";
console.log(myPerson.firstName);

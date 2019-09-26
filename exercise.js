// Exercise 1
function Car(name) {
  this.name = name;
  this.acceleration = 0;

  this.honk = function () {
    console.log("Tooooooot!");
  };

  this.accelerate = function (speed) {
    this.acceleration = this.accelerration + speed;

  };
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);

// Exercise 2
var baseObject = {
  width: 0,
  length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5
rectangle.length = 2;
rectangle.calcSize = function () {
  return this.width * this.length;
}
console.log(rectangle.calcSize());

// Exercise 3
var person = {
  _firstName: ""
};
Object.defineProperties(person, "firstName", {
  get: function () {
    return this._firstName
  },
  set: function (value) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = "";
    }
  }
  enumerable: true,
  configurable: true

});

console.log(person.firstNmae);
person.firstNmae = "Ma";
console.log(person.firstNmae);
person.firstNmae = "Maximilian";
console.log(person.firstNmae);


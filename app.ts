// let & const

let myVariable = "test";

myVariable = "Another variable!";
console.log(myVariable);

// const

const maxLevels = 100;
console.log(maxLevels);
// the following doesn't work
// maxLevels = 99;

// Block scope

function reset() {
  // console.log(myVariable);
  let myVariable = null;
  console.log(myVariable);
}

reset();
console.log(myVariable);

// Arrow Functions
console.log("Arro w functions");

const addNumbers = function (number1: number, number2: number): number {
  return number1 + number2;
};

console.log(addNumbers(10, 3));

const multipleNumbers = (number1: number, number2: number) => number1 * number2;

console.log(multipleNumbers(3, 10));

//
const greet = () => {
  console.log("Hello!");

};

greet();

const greetFriend = friend => console.log(friend);

greetFriend("mark");

// default parameters
console.log("Default parameters");

const countdown = (start: number = 10): void => {
  console.log(start);
  while (start > 0) {
    start--;
  }
  console.log("Done~", start);
}

countdown(30);
countdown();

// Rest and spread operator
console.log("Rest and Spread");

const numbers = [1, 10, 98, -5];
console.log(Math.max(33, 99, 10, -3));
// invalid
// console.log(Math.max(numbers));
// spreading
console.log(Math.max(...numbers));

function makeArray(name: string, ...args: number[]) {
  return args;
}

console.log(makeArray("max", 1, 2, 6));

// Destructuring
console.log("Destructuring");

// Destructuring Array
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData = {userName: "Max", age: 27};
// Destructuring Object
// key name and variable name should be matched
const {userName, age} = userData;
console.log(userName, age);

// how to map key name and variable name
const {userName: myName, age: myAge} = userData;
console.log(myName, myAge);

// Template literals
console.log("Template literals");

const user = "Max";
const greeting = `This is a heading!
I'm ${user}.
This is cool!
`;
console.log(greeting);

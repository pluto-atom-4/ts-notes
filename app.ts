// string
let myName = 'Max';
// myName = 28;

// number
let myAge: number = 27.5;
//myAge = 'Max';


// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';


// array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = 100;


// tuples
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
  Grey,
  Green = 100,
  Blue = 2
}

let myColor = Color.Green;
console.log(myColor);


let  myCar : any = "BMW";
console.log(myCar);
myCar = {Brand: "BMW", Series: 3};
console.log(myCar);

// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
//console.log(multiply(2, 'Max'))
console.log(multiply(10, 2));

// function types
let myMultiply: (val1: number, val2: number) => number;

// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5,2));

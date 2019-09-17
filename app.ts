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
